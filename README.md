# Luis Okal Dulo: Portfolio

Personal portfolio, live at **https://luisdulo.github.io**.

## How it is built

| Language | Role |
|---|---|
| JavaScript (React, Vite) | The site itself, in `src/` |
| Python | `scripts/build_data.py` measures language usage across my public, non-fork repositories through the GitHub API, with tests in `scripts/test_build_data.py` |
| CSS, HTML | Styling and the page shell, with light and dark themes |

GitHub Actions runs the Python tests, refreshes the language data, builds the site and deploys it to GitHub Pages on every push and every Monday.

## Run it locally

```bash
npm install
npm run data
npm run dev
```

Edit the written content in `src/content.js`.
