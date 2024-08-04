import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const generateReadme = (configOptions: SelectOptions) => {
  const { hasTypescript, hasNext, hasNuxt, hasReact, hasWebpack, hasStorybook, hasGatsby } =
    getCertainConditions(configOptions)

  const desc = () => {
    let desc = ''

    if (hasWebpack) {
      desc = `${desc ? `${desc}\n\n` : ''}## Initialising Webpack

This is not the best practise. Use your own methods.

1. Execute \`npx webpack init\`
2. If an error like \`For using this command you need to install: '@webpack-cli/generators' package.\` occurred, re-execute the command
3. Choose the options you need`
    }
    if (hasNuxt) {
      desc = `${desc ? `${desc}\n\n` : ''}## Setting PostCSS

You don't need to install the following packages since Nuxt.js already includes them ([See Nuxt.js documentation](https://nuxt.com/docs/getting-started/styling#using-postcss)):

- autoprefixer
- cssnano
- postcss-import
- postcss-url

Configure postcss in \`nuxt.config.ts\` instead of \`postcss.config.js\`.

## Modules

Building the project might take a long time when using modules from the Nuxt team and community. Unfortunately, I haven't found the solution. Refer to the Nuxt.js documentation for more information:

- [Modules](https://nuxt.com/modules)
- [Exploring Nuxt Modules](https://nuxt.com/docs/guide/concepts/modules#exploring-nuxt-modules)`
    }
    if (hasGatsby) {
      desc = `${desc ? `${desc}\n\n` : ''}## Beginning Gatsby

If you want to use Gatsby with themes, use the starters provided by Gatsby. You can choose and install the necessary starter libraries from [Gatsby Starter Library](https://www.gatsbyjs.com/starters/).

## Creating Gatsby project

This boilerplate is configured based on the following options.

\`\`\`text
✓ Will you be using JavaScript or TypeScript?
• TypeScript

✓ Will you be using a CMS?
• No (or I'll add it later)

✓ Would you like to install a styling system?
• PostCSS

✓ Would you like to install additional features with other plugins?
• Add responsive images
• Add an automatic sitemap
• Generate a manifest file
• Add Markdown and MDX support
\`\`\`

If you don't want to configure the options yourself, use the command \`gatsby new [folder name]\`. Refer to the [Gatsby.js documentation](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-1/#create-a-gatsby-site) to set up the basic settings for Gatsby.`
    }

    return desc
  }

  const descStorybook = hasStorybook
    ? `## Setting up Storybook

You should install Storybook after setting up the development environment.

\`\`\`bash
npx storybook@latest init
\`\`\`

If ESLint is installed, You might see the following message:

> We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: <https://github.com/storybookjs/eslint-plugin-storybook#readme>

If you choose 'yes', it will install the plugin and add the option \`plugin:storybook/recommended\` to \`.eslintrc.js > extends\` automatically.`
    : ''

  const command = () => {
    if (hasNext) {
      return `yarn create next-app <my-app-name>${hasTypescript ? ' --typescript' : ''}`
    }
    if (hasReact) {
      return 'yarn create vite <my-app-name> --template react-ts'
    }
    if (hasNuxt) {
      return 'npx nuxi@latest init <project-name>'
    }
  }

  const more = () => `${desc() ? `\n${desc()}` : ''}${descStorybook ? `\n\n${descStorybook}` : ''}`

  function* generateNumbers() {
    yield 1
    yield 2
    yield 3
    return 4
  }
  const numbers = generateNumbers()
  const number = () => numbers.next().value

  const code = `# How to set a development environment
${command() ? `\n${number()}. Create an app using \`${command()}\`` : ''}
${number()}. Install the packages you selected
${number()}. Add the created configuration files to the environment
${number()}. Happy coding😎${more() ? `\n${more()}` : ''}`

  return code
}

export default generateReadme
