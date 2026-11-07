import unittest

from build_data import aggregate, eligible


class AggregateTests(unittest.TestCase):
    def test_sums_languages_across_repos_largest_first(self):
        rows = aggregate({"a": {"Python": 300, "CSS": 100}, "b": {"Python": 100}})
        self.assertEqual([r["name"] for r in rows], ["Python", "CSS"])
        self.assertEqual(rows[0]["bytes"], 400)
        self.assertEqual(rows[0]["share"], 80.0)
        self.assertEqual(rows[0]["repos"], ["a", "b"])

    def test_repos_without_languages_add_nothing(self):
        self.assertEqual(aggregate({"empty": {}}), [])


class EligibleTests(unittest.TestCase):
    def test_only_public_non_forks_count(self):
        self.assertTrue(eligible({"fork": False, "private": False}))
        self.assertFalse(eligible({"fork": True, "private": False}))
        self.assertFalse(eligible({"fork": False, "private": True}))


if __name__ == "__main__":
    unittest.main()
