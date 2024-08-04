const getStorybookDesc = () => `## Setting up Storybook

You should install Storybook after setting up the development environment.

\`\`\`bash
npx storybook@latest init
\`\`\`

If ESLint is installed, You might see the following message:

> We have detected that you're using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: <https://github.com/storybookjs/eslint-plugin-storybook#readme>

If you choose 'yes', it will install the plugin and add the option \`plugin:storybook/recommended\` to \`.eslintrc.js > extends\` automatically.`

export default getStorybookDesc
