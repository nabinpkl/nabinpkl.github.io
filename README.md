# nabin6246.github.io

Personal portfolio website built with Next.js and TypeScript.

## Deployment

This repository is named `nabinpkl.github.io`, so GitHub Pages will serve the site directly from the selected branch. A simple workflow is included to build the static export and deploy it to a `gh-pages` branch by default. For user sites you can also publish directly to `master`/`main` (or whatever branch is selected in Pages settings) since GitHub serves the branch root. Adjust the workflow's `publish_branch` setting accordingly.

You have two common deployment patterns:

1. **Action-driven** – keep source on `main`/`master`; the workflow builds and exports and then pushes the resulting static files to the target branch (`gh-pages` by default, or `master` for user sites).
2. **Branch-as-source** – build/export locally and commit the `out/` contents directly to the branch configured in Pages. The action mirrors this automatically but you can choose to do it by hand.

### Using the provided GitHub action

- Push to `main` (or your default branch).
- The workflow `Deploy static site` builds the project, runs `pnpm export`, and publishes the `out/` folder using `peaceiris/actions-gh-pages`.
- You can also run `pnpm build && pnpm export` locally and copy the `out/` contents to the branch you serve from if you prefer manual deployment.

## Development

- Install dependencies with `pnpm install`
- Start the dev server with `pnpm dev`
- Create the static export with `pnpm build`

The production build is exported to `out/`, which keeps the site compatible with GitHub Pages.