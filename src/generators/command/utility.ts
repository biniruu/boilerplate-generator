import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

const getUtilityCommands = (configOptions: SelectOptions) => {
  const {
    hasCopyToClipboard,
    hasDayjs,
    hasDotenv,
    hasFileSaver,
    hasImmer,
    hasHusky,
    hasJavascriptStringify,
    hasJsdiff,
    hasJsZip,
    hasLodash,
    hasMarkdownlint,
    hasNext,
    hasNodemon,
    hasNuxt,
    hasPrism,
    hasReact,
    hasReactInfiniteScroller,
    hasReactJoyride,
    hasReactSyntaxHighlighter,
    hasTypescript,
    hasWebpack,
  } = getCertainConditions(configOptions)

  const utilityDependencies: string[] = []
  const utilityDevDependencies: string[] = []

  /**
   * copy-to-clipboard (Copy to clipboard)
   * {@link https://github.com/sudodoki/copy-to-clipboard#readme}
   */
  if (hasCopyToClipboard) {
    utilityDependencies.push('copy-to-clipboard')
  }
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
    hasNuxt && utilityDevDependencies.push('dotenv-expand')
    hasReact && utilityDevDependencies.push('dotenv', 'dotenv-expand', 'env-cmd')
  }
  /**
   * file-saver (File Saver)
   * {@link https://github.com/eligrey/FileSaver.js#readme}
   */
  if (hasFileSaver) {
    utilityDependencies.push('file-saver')
    hasTypescript && utilityDevDependencies.push('@types/file-saver')
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
    utilityDependencies.push('immer')
    if (hasReact || hasNext) {
      utilityDependencies.push('use-immer')
    }
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
    utilityDependencies.push('lodash-es')
    utilityDevDependencies.push('@types/lodash-es')
    if (!hasNext || !hasReact || !hasNuxt || !hasWebpack) {
      utilityDependencies.push('lodash')
    }
  }
  /**
   * markdownlint
   * {@link https://github.com/DavidAnson/markdownlint#markdownlint}
   */
  if (hasMarkdownlint) {
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
    utilityDependencies.push('react-infinite-scroller')
    hasTypescript && utilityDevDependencies.push('@types/react-infinite-scroller')
  }
  /**
   * react-joyride (React Joyride)
   * {@link https://react-joyride.com}
   */
  if (hasReactJoyride) {
    utilityDependencies.push('react-joyride')
    hasTypescript && utilityDevDependencies.push('@types/react-joyride')
  }
  /**
   * react-syntax-highlighter (React Syntax Highlighter)
   * {@link https://github.com/react-syntax-highlighter/react-syntax-highlighter#readme}
   */
  if (hasReactSyntaxHighlighter) {
    utilityDependencies.push('react-syntax-highlighter')
    hasTypescript && utilityDevDependencies.push('@types/react-syntax-highlighter')
  }

  return {
    utilityDependencies,
    utilityDevDependencies,
  }
}

export default getUtilityCommands
