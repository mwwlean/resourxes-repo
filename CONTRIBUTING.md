# Contributing to ResourXe

Thanks for helping improve the list. This guide covers what we accept and how to submit it.

## Ways to contribute

- Add a missing developer tool, AI resource, or design resource.
- Fix a broken link, typo, or inaccurate description.
- Suggest a better category or description.

## Resource requirements

Before submitting, make sure the resource meets all of these:

- **Relevant.** It is useful to developers, AI builders, or creatives.
- **Free to use.** It must be free to use, or have a meaningful free tier. Paid-only products are not accepted.
- **Open source preferred.** Projects with an OSI-approved license (MIT, Apache-2.0, BSD, GPL, MPL, etc.) are preferred. **Source-available or custom licenses (FSL, BSL, SSPL, etc.) are allowed only if the license is disclosed** in the description and the pull request.
- **Actively maintained.** Avoid abandoned or archived projects.
- **Canonical link.** Use the official website or repository, not a mirror, redirect, or affiliate link.
- **Not already listed.** Search the README and the site before submitting.
- **Accurate and neutral.** Describe what the resource does without marketing language.
- **One per pull request.** Submit a single resource per PR so it can be reviewed on its own.
- **Disclose affiliation.** If you maintain or work on the resource, say so in the pull request.

## How to submit

1. Fork the repository and create a branch.
2. Add a row to the correct section table in [`README.md`](README.md) using this format:

   ```markdown
   | [Name](https://example.com/) | A short, neutral description of what it does. |
   ```

3. Keep the section list alphabetical or grouped consistently with the surrounding entries.
4. Open a pull request using the template and fill in every field.
5. Make sure the title follows the `[Resource] -> [Section in Documentation]` format.

Site data lives in [`src/lib/resources.ts`](src/lib/resources.ts). Maintainers sync merged README entries into the site, so you only need to edit the README unless you are changing site behavior.

## Pull request template

GitHub loads [`.github/pull_request_template.md`](.github/pull_request_template.md) automatically when you open a pull request. Fill in every field:

```markdown
# Resource Name
->

# Description
->

# Link
->

# License
->

# Affiliation
->

## Checklist
- [ ] I have read the contributing guidelines.
- [ ] The resource is free to use (a meaningful free tier is acceptable) and not paid-only.
- [ ] I have disclosed the license, including any source-available or custom license.
- [ ] The resource is actively maintained and the link is the official site or repository.
- [ ] I have searched the README and site and confirmed the resource is not already listed.
- [ ] I have added the entry to the correct section table in `README.md`.
- [ ] I have disclosed any affiliation with the resource.
```

## What we may decline

- Paid-only, closed-source services with no free tier.
- Duplicate or near-duplicate entries.
- Unmaintained, abandoned, or broken projects.
- Links that are not the official source.
- Low-effort descriptions or promotional copy.
- Bulk submissions without individual justification.

## Review process

A maintainer reviews each pull request for relevance, licensing, and accuracy. Expect edits to the description or category. Once merged, the entry may also be added to the website data.

By contributing, you agree that your contributions are licensed under the repository's [MIT License](LICENSE).
