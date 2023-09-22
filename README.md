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

The build includes an imagemin task.

## Notes on responsiveness

The targeted screen widths for this are:

- 320 pixels
- 480
- 600
- 800
- 1080
- 1920 pixels (largest).

Some pages use different line lengths

## Credits/Sources

All images are from [pexels.com](https://www.pexels.com/), except for the logo, which was generated using [Canva](https://canva.com).
