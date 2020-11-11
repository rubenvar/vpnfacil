# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.16.0] - 2020-11-11

### Changed

- Almost all SVG icons are now from [tabler-icons](https://github.com/tabler/tabler-icons) (`tabler-icons-svelte`) instead of from the Refactoring UI pack.
- Countries in single VPN pages are now shown in Spanish (`country-list-spanish`).

## [1.15.0] - 2020-11-05

### Added

- Added a table view for the main VPN list in the front page. Now the table view is the default, but in smaller screens it defaults to blocks and disables the table view.
- Added a view switcher in the main bar, along the sorting and (future) filtering features.

## [1.14.0] - 2020-11-04

### Added

- Added a simple, fully responsive nav ([idea](https://linguinecode.com/post/create-a-navbar-in-svelte)).

### Removed

- Previous _fluid header_ was created with [svelte-fluid-header](https://github.com/collardeau/svelte-fluid-header). Remove it as it's not used anymore.

## [1.13.0] - 2020-11-01

### Added

- Head meta tags added in single VPN pages.

### Fixed

- Sitemap now works, request to get all vpns is made with axios now.
- Header title was H1, duplicating the H1 tag in every page. Now the title is H2 except for Homepage.

## [1.12.0] - 2020-10-30

### Added

- The screenshot of each VPN webbsite is now taken through a Lambda (my Screenshot To Cloudinary) and posted to the spreadsheet with another Lambda.

## [1.11.0] - 2020-10-26

### Added

- Single VPN pages: all the info about a VPN in its single page, linked from the card in the front page.

## [1.10.0] - 2020-10-07

### Added

- New blog post 🖊️.

### Changed

- Added trailing slash in all posts.
- Added more links in posts.

## [1.9.3] - 2020-10-06

### Added

- 3 new VPNs.

### Changed

- Added trailing slash in canonicals, sitemap, nav links, etc.

## [1.9.2] - 2020-10-01

### Changed

- External links in blog posts now open in new tab/window.

## [1.9.1] - 2020-10-01

### Added

- 2 new VPNs.

### Changed

- Styling in blog posts.

## [1.9.0] - 2020-09-30

### Added

- New blog post (offers).
- Responsive mobile nav menu.
- Responsive styling for offer cards, blog posts, blog index.

## [1.8.1] - 2020-09-30

### Added

- Added SCSS support (https://github.com/dceddia/svelte-sass-template).

## [1.8.0] - 2020-09-29

### Added

- Added mdx (mdsvex) support instead of md. Now I can add charts/other components in the posts (https://www.ryanfiller.com/blog/a-deep-dive-into-sapper).

## [1.7.0] - 2020-09-24

### Fixed

- Enabled CORS in the aws API for 'https://vpnfacil.com', so the error 500 after navigating to homepage is fixed.

## [1.6.0] - 2020-09-24

### Added

- Added a sitemap that fetchs blog posts and renders at `/sitemap.xml`.
- 6 new blog posts added.

## [1.5.5] - 2020-09-21

### Added

- Add 'devices' to sorting options

## [1.5.4] - 2020-09-21

### Added

- Sort ascending/descending for each criteria

## [1.5.3] - 2020-09-21

### Fixed

- Fix sorting in Chrome.
- Fix code relating to sorting and make the feature more resilient.

## [1.5.2] - 2020-09-20

### Changed

- Alphabetically sorting works with uppercase and lowercase

## [1.5.1] - 2020-09-20

### Fixed

- Fixed header and filter bar padding, margin and max widths

## [1.5.0] - 2020-09-20

### Added

- 6 new VPNs added.
- Sorting feature added. 4 options for now: rating (default), VPN name, server and country number.
- Added a bar under Hero to host total VPN number, and sorting and future filtering features.

## [1.4.0] - 2020-09-17

### Added

- Add blog functionality.
- Add a `/guias` page. It will work as blog index.

### Changed

- Add a link to `/guias` in header (left it commented out for now).

### Fixed

- Fix casing in a VPN name.
- Update a logo.

## [1.3.0] - 2020-09-16

### Added

- Added affiliate links to many VPNs in spreadsheet.

### Changed

- Added `nofollow` to all affiliate links.

## [1.2.0] - 2020-09-16

### Removed

- Remove SpyOFF VPN from the list. It's no longer available to the public.

## [1.1.0] - 2020-09-08

### Fixed

- Sort alphabetically also in Chrome (it only worked on Firefox, `.sort` method inconsistent...)

## [1.0.0] - 2020-09-08

🚀 Initial release.

### Added

- List of 23 VPNs sorted alphabetically, shown as cards with their main features on the homepage.
