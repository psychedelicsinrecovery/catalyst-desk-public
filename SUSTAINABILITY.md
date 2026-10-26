# 🌱 C.A.T.A.L.Y.S.T. chalkboard: what keeps it running

> PIR's GitHub pages as a whole are on **[the AstroLog's sustainability page](https://psychedelicsinrecovery.github.io/changelog-astro-public/sustainability)**.
> This file lists what applies to the chalkboard.

Nothing here costs money. The chalkboard is one static page; what it takes is a few things that quietly
expire or drift, written down so none of it depends on anyone's memory.

## 🧩 The pieces

| Repository | What it is | How it goes live |
| --- | --- | --- |
| `catalyst-desk` (private) | The chalkboard's source (`site/`) and the fleet's brand files | Only `site/` and the files below are ever public |
| [`catalyst-desk-public`](https://github.com/psychedelicsinrecovery/catalyst-desk-public) (public) | The chalkboard on GitHub Pages, with this file, the roadmap and the license | A workflow copies them over on every change |

## 🛠️ What needs looking after

| What | Why it matters | What to do |
| --- | --- | --- |
| 🔑 **The publishing token** (`PUBLIC_REPO_TOKEN`) | Lets this repository's workflow push the chalkboard to `catalyst-desk-public`. **Since 2026-10-26:** the fine-grained token `public-sync-desks` (resource owner `psychedelicsinrecovery`; only `catalyst-desk-public` and `board-of-directors-public`; Contents + Workflows read/write; **no expiration**). It's shared with `board-of-directors`. If it's ever revoked or regenerated, the page quietly stops updating, because the workflow skips with a notice. | Make a new fine-grained token with the same owner, repositories and permissions. Set it as `PUBLIC_REPO_TOKEN` here **and** on `board-of-directors` (pipe it from the clipboard: `pbpaste \| gh secret set PUBLIC_REPO_TOKEN -R …`), then run **Actions → 🌐 Sync public site** once by hand. |
| 🧭 **The navbar and footer** | They come from PIR's arrival kit on the hub (`psychedelicsinrecovery.github.io/arrival/`), with the chalkboard's own links set in `site/index.html` before the kit loads, and kept in chalk colors by `site/assets/catalyst.css`. | If the kit's tokens change, check the `:root[data-theme]` block at the top of `catalyst.css`. |
| 🖼️ **The share image** (`site/assets/img/og-share.jpg`) | The chalkboard's artwork at 1200×630, shown whole over a blurred copy of itself. Chat apps cache link previews for days. | After changing it, refresh cached previews (see `psychedelicsinrecovery/.github` → `SOCIAL-PREVIEWS.md`). |
| 🎨 **The mark elsewhere** | The mark is reused as a watermark and link on A.L.E.X.'s pages and the desk portals (`alex-desk/site/assets/catalyst-mark.svg`). | When the mark changes, copy it there too. |
| 🖌️ **The artwork** | Artwork of C.A.T.A.L.Y.S.T., A.L.E.X. and Alexandrina is PIR®'s. | Ask the PR Committee before reusing it anywhere new. |

## 🤝 Stewardship and succession

Today drasticstatic (Christopher W) administers PIR®'s GitHub organization. Since 2026-10-26 the
chalkboard publishes itself: `PUBLIC_REPO_TOKEN` is set, with no expiration, and the first automatic
sync passed. Until then it was copied to `catalyst-desk-public` by hand. One owner is still a single
point of failure. The plan (two owners for the organization, org-owned automation instead of personal tokens, a token
register with expiry dates, a renewal runbook, hand-over steps and scheduled backups) is on the
AstroLog's [sustainability page](https://psychedelicsinrecovery.github.io/changelog-astro-public/sustainability).

*Maintained by Christopher W with Alfred (Claude Code). Last reviewed 2026-10-26.*
