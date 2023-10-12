# sydfjords-react
+ [![cov](https://aceade.github.io/sydfjords-react/badges/coverage.svg)](https://github.com/aceade/sydfjords-react/actions)

A React practice project, porting my [sydfjords](https://aceade.github.io/sydfjords) repo to React. Like the previous one, this is responsive and uses a basic CI/CD pipeline (GitHub Actions), but also includes basic localisation.

## Commands

This uses [pnpm](https://pnpm.io/) instead of npm. However, most of the commands should work roughly the same, as pnpm is effectively a drop-in replacement for npm.

- `pnpm install` installs dependencies. Unlike npm, it adds dependencies into a global store instead of a per-project node_modules folder.
- `pnpm run dev` runs a development build.
- `pnpm run build` runs a production build. This is also used during the automated deployment.
- `pnpm run preview` deploys a local preview of the production build.
- `pnpm update` updates all outdated dependencies.

### Deploying

The build uses a GitHub Action ([view build file](.github/workflows/build.yml)) to build the React app and then deploys the contents of the `dist/` folder as a static page.

## Notes on responsiveness

The targeted screen widths in pixels for this are:

- 320
- 480
- 600
- 800
- 1080
- 1920

## Accessibility

I manually run this through the WAVE extension for Firefox. It hasn't reported anything yet, but improvements are welcome (especially ways to automate this).

## Localisation

Localisation keys have been implemented across the site, but currently only the Navbar has actual translation values. This is limited to the current languages:
- English (default)
- Irish (purely because I *am* Irish)
- German
- Italian
- Arabic
- Japanese

I am not a professional translator, so corrections are welcome.

## Unit tests

Tests use Jest and Testing-Library. At the moment, these are limited to the Gallery, Location and Navbar files. Testing the languages changes is not fully functional yet.

## Credits/Sources

All images are from [pexels.com](https://www.pexels.com/), except for the logo, which was generated using [Canva](https://canva.com). The globe icon comes from [Boxicons](https://boxicons.com)
