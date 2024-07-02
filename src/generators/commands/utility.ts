import type { SelectOptions } from '_types'

const getUtilityCommands = (configOptions: SelectOptions) => {
  const hasDayjs = configOptions.dayjs
  const hasDotenv = configOptions.dotenv
  const hasFileSaver = configOptions.fileSaver
  const hasImmer = configOptions.immer
  const hasHusky = configOptions.husky
  const hasJavascriptStringify = configOptions.javascriptStringify
  const hasJsdiff = configOptions.jsdiff
  const hasJsZip = configOptions.jsZip
  const hasLodash = configOptions.lodash
  const hasMarkdown = configOptions.markdown
  const hasNext = configOptions.next
  const hasNodemon = configOptions.nodemon
  const hasNuxt = configOptions.nuxt
  const hasPrism = configOptions.prism
  const hasReact = configOptions.react
  const hasReactInfiniteScroller = configOptions.reactInfiniteScroller
  const hasReactJoyride = configOptions.reactJoyride
  const hasTypescript = configOptions.typescript
  const hasWebpack = configOptions.webpack

  const utilityDependencies: string[] = []
  const utilityDevDependencies: string[] = []

  /**
   * dayjs (Day.js)
   * {@link https://day.js.org}
   */
  if (hasDayjs) {
    utilityDependencies.push('dayjs')
  }
  /**
   * dotenv
   * {@link https://github.com/motdotla/dotenv#readme}
   *
   * dotenv-expand
   * {@link https://github.com/motdotla/dotenv-expand#readme}
   *
   * env-cmd
   * {@link https://github.com/toddbluhm/env-cmd#readme}
   */
  if (hasDotenv) {
    if (hasNuxt) {
      utilityDevDependencies.push('dotenv-expand')
    }
    if (hasReact) {
      utilityDevDependencies.push('dotenv', 'dotenv-expand', 'env-cmd')
    }
  }
  /**
   * file-saver (File Saver)
   * {@link https://github.com/eligrey/FileSaver.js#readme}
   */
  if (hasFileSaver) {
    if (hasTypescript) {
      utilityDevDependencies.push('@types/file-saver')
    }
    utilityDependencies.push('file-saver')
  }
  /**
   * husky (Husky)
   * {@link https://typicode.github.io/husky/}
   */
  if (hasHusky) {
    utilityDevDependencies.push('husky')
  }
  /**
   * immer (Immer)
   * {@link https://immerjs.github.io/immer/}
   *
   * use-immer
   * {@link https://github.com/immerjs/use-immer#readme}
   */
  if (hasImmer) {
    if (hasReact || hasNext) {
      utilityDependencies.push('use-immer')
    }
    utilityDependencies.push('immer')
  }
  /**
   * javascript-stringify (JavaScript Stringify)
   * {@link https://github.com/blakeembrey/javascript-stringify#javascript-stringify}
   */
  if (hasJavascriptStringify) {
    utilityDependencies.push('javascript-stringify')
  }
  /**
   * jsdiff
   * {@link https://github.com/nathan7/jsdiff#jsdiff}
   */
  if (hasJsdiff) {
    utilityDependencies.push('jsdiff')
  }
  /**
   * jszip (JSZip)
   * {@link https://github.com/Stuk/jszip#readme}
   */
  if (hasJsZip) {
    utilityDependencies.push('jszip')
  }
  /**
   * lodash (Lodash)
   * {@link https://lodash.com}
   */
  if (hasLodash) {
    if (!hasNext || !hasReact || !hasNuxt || !hasWebpack) {
      utilityDependencies.push('lodash')
    }
    utilityDependencies.push('lodash-es')
    utilityDevDependencies.push('@types/lodash-es')
  }
  /**
   * markdownlint
   * {@link https://github.com/DavidAnson/markdownlint#markdownlint}
   */
  if (hasMarkdown) {
    utilityDevDependencies.push('markdownlint')
  }
  /**
   * nodemon
   * {@link https://nodemon.io}
   */
  if (hasNodemon) {
    utilityDependencies.push('nodemon')
  }
  /**
   * prismjs (Prism)
   * {@link https://prismjs.com}
   * {@link https://lea.verou.me/blog/2012/07/introducing-prism-an-awesome-new-syntax-highlighter/, Introducing Prism: An awesome new syntax highlighter}
   */
  if (hasPrism) {
    utilityDependencies.push('prismjs')
  }
  /**
   * react-infinite-scroller (React Infinite Scroller)
   * {@link https://github.com/danbovey/react-infinite-scroller#readme}
   */
  if (hasReactInfiniteScroller) {
    if (hasTypescript) {
      utilityDevDependencies.push('@types/react-infinite-scroller')
    }
    utilityDependencies.push('react-infinite-scroller')
  }
  /**
   * react-joyride (React Joyride)
   * {@link https://react-joyride.com}
   */
  if (hasReactJoyride) {
    if (hasTypescript) {
      utilityDevDependencies.push('@types/react-joyride')
    }
    utilityDependencies.push('react-joyride')
  }

  return {
    utilityDependencies,
    utilityDevDependencies,
  }
}

export default getUtilityCommands
