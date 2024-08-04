import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

import getGatsbyDesc from './getsby'
import getNuxtDesc from './nuxt'
import getStorybookDesc from './storybook'
import getWebpackDesc from './webpack'

const generateReadme = (configOptions: SelectOptions) => {
  const { hasTypescript, hasNext, hasNuxt, hasReact, hasWebpack, hasStorybook, hasGatsby } =
    getCertainConditions(configOptions)

  const desc = () => {
    let desc = ''

    if (hasWebpack) {
      desc = `${desc ? `${desc}\n\n` : ''}${getWebpackDesc()}`
    }
    if (hasNuxt) {
      desc = `${desc ? `${desc}\n\n` : ''}${getNuxtDesc()}`
    }
    if (hasGatsby) {
      desc = `${desc ? `${desc}\n\n` : ''}${getGatsbyDesc()}`
    }

    return desc
  }

  const descStorybook = hasStorybook ? getStorybookDesc() : ''

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
${number()}. ${getGatsbyDesc() ? 'Create the Gatsby.js app and install' : 'Install'} the packages you selected
${number()}. Add the created configuration files to the environment
${number()}. Happy coding😎${more() ? `\n${more()}` : ''}`

  return code
}

export default generateReadme
