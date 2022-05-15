# Vitesse

<div align='center'>
  <img
    src='https://user-images.githubusercontent.com/11247099/111864893-a457fd00-899e-11eb-9f05-f4b88987541d.png'
    alt='Vitesse - Opinionated Vite starter template with rigorous linting'
    width='600'
  />
</div>

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next)

  - 🏃 [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild)

- 🗂 [File based routing](./src/core/pages)

- 📦 [Components auto importing](./src/core/components)

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📑 [Layout system](./src/core/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./locales)


- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import)

- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦾 [TypeScript](https://www.typescriptlang.org/), of course

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 👮🏻 Format and Lint with VSCode and CLI
  - 💾 [Eslint](https://eslint.org/)and  [Prettier](https://prettier.io/)


- 🤖 Standards checking with pre-commit hooks. Test validation on pre-push with [Husky](https://github.com/typicode/husky)

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/)


- ☁️ Deploy on [Netlify](https://www.netlify.com/), zero-config - See [Netlify Deployment](#deploy-on-netlify)


**CLI only. VSCode plugin does not support configuration files.*

## Pre-packed

### UI Frameworks

- [`UnoCss`](https://github.com/unocss/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [`iconify`](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`Pure CSS Icons via UnoCSS`](https://github.com/unocss/unocss/tree/main/packages/preset-icons)

### Plugins

- [`pinia`](https://pinia.esm.dev)
- [`vue-router`](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages)
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa)
- [`vue-i18n-next`](https://github.com/intlify/vue-i18n-next)
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n)
- [`vueuse`](https://github.com/antfu/vueuse)
  - [`@vueuse/head`](https://github.com/vueuse/head)
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap)
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import)

### Nice to haves

- Alias `@` to `<rootDir>`
- Alias `~` to `<rootDir>/src` a.k.a. `<srcDir>`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time

### Dev tools

- [`typescript`](https://www.typescriptlang.org/)
- [`cypress`](https://cypress.io/) - E2E Testing
- [`pnpm`](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Static-site generation
  - [`critters`](https://github.com/GoogleChromeLabs/critters) - Critical CSS

## Variations

This template is strongly opinionated with my personal preferences and feature sets. It is a fork of
the [original template](https://github.com/antfu/vitesse) created by [@antfu](https://github.com/antfu)
and also takes inspiration from [Vitesse-Enterprise](https://github.com/FranciscoKloganB/vitesse-enterprise)
made by [@FranciscoKloganB](https://github.com/FranciscoKloganB).

For an up-to-date list of official and community contributions to the `vitesse ecosystem`, we recommend
checking the official repository's [variations section](https://github.com/antfu/vitesse#variations).

## Try it now

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/younessaitali/vue_3-vite-typescript-boilerplate/generate).





## Usage

### Development

Run and visit <http://localhost:3000>

```bash
pnpm dev
```

### Code formatting

```bash
pnpm lint
```

### Testing

```bash
# Interactive test run
pnpm test:e2e
pnpm test:unit
```

### Build for production

```bash
# Ouputs files to dist folder. Ready to be served in SPA mode.
pnpm build:spa
# Outputs files to dist folder which passed through the Vite SSG pipeline. Ready to be served.
pnpm build:ssg
```


### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way,
and your App will be live in a minute.
