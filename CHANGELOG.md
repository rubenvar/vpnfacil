# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
