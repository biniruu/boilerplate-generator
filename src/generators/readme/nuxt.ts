const getNuxtDesc = () => `## Setting PostCSS

You don't need to install the following packages since Nuxt.js already includes them ([See Nuxt.js documentation](https://nuxt.com/docs/getting-started/styling#using-postcss)):

- autoprefixer
- cssnano
- postcss-import
- postcss-url

Configure postcss in \`nuxt.config.ts\` instead of \`postcss.config.js\`.

## Modules

Building the project might take a long time when using modules from the Nuxt team and community. Unfortunately, I haven't found the solution. Refer to the Nuxt.js documentation for more information:

- [Modules](https://nuxt.com/modules)
- [Exploring Nuxt Modules](https://nuxt.com/docs/guide/concepts/modules#exploring-nuxt-modules)`;

export default getNuxtDesc;
