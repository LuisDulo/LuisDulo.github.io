"""Measure language usage across LuisDulo's public, non-fork GitHub repositories.

Writes src/data/github.json, which the site reads at build time. Only public
repositories are requested and forks are skipped, so every number on the site
can be checked against code anyone can open.

Standard library only. Set GITHUB_TOKEN to raise the API rate limit.
"""
import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

USER = "LuisDulo"
API = "https://api.github.com"
OUTPUT = Path(__file__).resolve().parent.parent / "src" / "data" / "github.json"


def fetch(path):
    request = urllib.request.Request(API + path, headers={
        "Accept": "application/vnd.github+json",
        "User-Agent": "portfolio-language-stats",
    })
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        request.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)


def eligible(repo):
    return not repo["fork"] and not repo["private"]


def aggregate(repo_languages):
    """Turn {repo: {language: bytes}} into language rows, largest first."""
    totals, used_in = {}, {}
    for repo, languages in repo_languages.items():
        for language, size in languages.items():
            totals[language] = totals.get(language, 0) + size
            used_in.setdefault(language, []).append(repo)
    grand_total = sum(totals.values())
    rows = [{
        "name": language,
        "bytes": size,
        "share": round(size / grand_total * 100, 2) if grand_total else 0,
        "repos": sorted(used_in[language]),
    } for language, size in totals.items()]
    return sorted(rows, key=lambda row: (-row["bytes"], row["name"]))


def main():
    repos = [r for r in fetch(f"/users/{USER}/repos?per_page=100&type=owner") if eligible(r)]
    repo_languages = {r["name"]: fetch(f"/repos/{USER}/{r['name']}/languages") for r in repos}
    data = {
        "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "repoCount": len(repos),
        "languages": aggregate(repo_languages),
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    print(f"Measured {len(data['languages'])} languages across {len(repos)} repositories")


if __name__ == "__main__":
    try:
        main()
    except (urllib.error.URLError, TimeoutError) as error:
        # A GitHub outage should not block a deploy: the committed file still works.
        print(f"Keeping existing data, GitHub request failed: {error}", file=sys.stderr)
