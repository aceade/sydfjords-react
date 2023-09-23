# sydfjords-react
A React practice project, porting another one from Vue.

This is a port of my [sydfjords](https://aceade.github.io/sydfjords) repo to React.

## Building

This uses [pnpm](https://pnpm.io/) instead of npm. However, most of the commands should work roughly the same.

- `pnpm install` installs dependencies. Unlike npm, it adds dependencies into a global store instead of a per-project node_modules folder.
- `pnpm run dev` runs a development build.
- `pnpm run build` runs a production build. This is also used during the automated deployment.
- `pnpm run preview` deploys a local preview of the production build.
- `pnpm update` updates all outdated dependencies.

## Notes on responsiveness

The targeted screen widths for this are:

- 320 pixels
- 480
- 600
- 800
- 1080
- 1920 pixels (largest).

## Accessibility

I manually run this through the WAVE extension for Firefox. It hasn't reported anything yet, but improvements are welcome.

## Localisation

Localisation keys have been implemented across the site, but currently only the Navbar has actual translation values. This is limited to the current languages:
- English (default)
- Irish (purely because I *am* Irish)
- German
- Italian
- Arabic
- Japanese

I am not a professional translator. Corrections are welcome.

## Credits/Sources

All images are from [pexels.com](https://www.pexels.com/), except for the logo, which was generated using [Canva](https://canva.com). The globe icon comes from [Boxicons](https://boxicons.com)
