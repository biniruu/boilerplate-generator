/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import getCertainConditions from '@utils/certainConditions'
import convertToString from '@utils/convertToString'
import { mergeConfigs, mergeImports } from '@utils/mergeText'
import type { Config, SelectOptions } from '_types'

import { importPluginConfig, importPluginImport } from './import'
import { jestConfig, jestImports, testingLibraryImport, testingLibraryReactConfig } from './jest'
import { jsxA11yConfig, jsxA11yImport } from './jsx-a11y'
import { nextConfig } from './next'
import { reactConfig, reactImport } from './react'
import { storybookConfig } from './storybook'
import { tailwindConfig, tailwindImport } from './tailwind'
import { tanstackConfig, tanstackImport } from './tanstack-query'
import { typescriptConfig, typescriptImport } from './typescript'

const generateEslintFlatConfig = (configOptions: SelectOptions) => {
  const { hasJest, hasNext, hasNuxt, hasReact, hasStorybook, hasTailwind, hasTanstackQuery, hasTypescript } =
    getCertainConditions(configOptions)

  const config: Config = {
    name: '@eslint/js',
    ignores: ['tsconfig.json', 'dist/'], // The pattern is added after the default pattern, which are ["**\/node_modules/", ".git/"]
    languageOptions: {
      globals: 'replace globals',
    },
    rules: {
      /**
       * eslint rules
       * {@link https://eslint.org/docs/latest/rules}
       *
       * camelcase : 카멜 케이스 작명 방식 강제
       * eqeqeq : 일치 연산자(===) 사용 강제. 동등 연산자(==) 사용 금지
       * new-cap : 'new' 연산자로 인스턴스 생성 시 constructor 함수명의 첫 글자를 대문자로 강제
       * no-console : 콘솔 사용 금지
       * no-debugger : debugger 사용 금지
       * no-duplicate-imports : 동일한 모듈에서 import를 여러 번 할 경우 모든 import를 inline으로 작성하도록 강제
       * no-inner-declarations : nested block에서 변수 또는 함수 선언 금지
       * no-nested-ternary : 중첩 삼항 연산자 금지
       * no-new-object : new Object로 객체 생성 금지
       * no-undef : 정의하지 않은 전역 변수는 /✱ global ... ✱/ 주석에 명시해야 사용 가능하도록 강제
       * no-underscore-dangle : 식별자 뒤에 언더스코어를 붙이지 못하도록 강제
       * no-useless-escape : 불필요한 escape 문자 사용 금지. extends에 eslint:recommended를 설정했을 때 동작한다
       * no-var : var로 변수 선언 금지
       * prefer-const : 재할당이 이루어지지 않는 변수에 let을 사용했을 경우 const로 변경하도록 강제
       * prefer-rest-params : 함수의 parameter에서 arguments 객체 대신 rest parameter를 사용하도록 강제. e.g. function (...args) {}
       * sort-imports : import 정렬
       * sort-imports > ignoreCase의 값은 항상 default값(false)으로 놔둘 것. true로 했을 때 가끔 다른 import 정렬 관련 rule과 충돌 발생
       * sort-imports > ignoreDeclarationSort는 항상 true로 할 것. false로 하면 import 정렬 관련 경고 발생 시 해결 불가
       * sort-imports > ignoreMemberSort는 항상 true로 할 것. false로 하면 typescript에서 type-only import를 inline으로 정의할 때 정렬 에러 발생
       */
      /**
       * ESLint JavaScript Plugin (@eslint/js)
       * {@link https://www.npmjs.com/package/@eslint/js}
       *
       * enables the rules recommended by the ESLint team (the replacement for "eslint:recommended")
       */
      'replace-recommended-eslint-configs-rules': '', // enables the rules recommended by the ESLint team (the replacement for "eslint:recommended") (https://www.npmjs.com/package/@eslint/js)
      camelcase: [
        'error',
        {
          properties: 'never',
        },
      ],
      eqeqeq: 'error',
      'new-cap': 'error',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      'no-duplicate-imports': 'off',
      'no-nested-ternary': 'warn',
      'no-new-object': 'warn',
      'no-undef': 'error',
      'no-underscore-dangle': 'error',
      'no-useless-escape': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'sort-imports': [
        'warn',
        {
          allowSeparatedGroups: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: true,
        },
      ],
    },
  }

  const getNext = hasNext ? `${nextConfig},\n` : ''

  const imports = mergeImports([
    importPluginImport,
    hasTypescript ? typescriptImport : '',
    hasTailwind ? tailwindImport : '',
    hasNext || hasReact ? reactImport : '',
    hasJest ? jestImports : '',
    (hasReact || hasNext) && hasJest ? testingLibraryImport : '',
    hasReact || hasNext || hasNuxt ? jsxA11yImport : '',
    hasTanstackQuery ? tanstackImport : '',
  ])

  const configs = mergeConfigs([
    importPluginConfig ? importPluginConfig : '',
    hasTypescript && typescriptConfig ? typescriptConfig : '',
    hasTailwind ? tailwindConfig : '',
    (hasNext || hasReact) && reactConfig ? reactConfig : '',
    hasJest && jestConfig ? jestConfig : '',
    (hasReact || hasNext) && hasJest && testingLibraryReactConfig ? testingLibraryReactConfig : '',
    hasStorybook && storybookConfig ? storybookConfig : '',
    (hasReact || hasNext || hasNuxt) && jsxA11yConfig ? jsxA11yConfig : '',
    hasTanstackQuery && tanstackConfig ? tanstackConfig : '',
  ])

  /**
   * About tslintConfig() function known as config() helper
   * {@link https://typescript-eslint.io/packages/typescript-eslint#config}
   *
   * The ESLint team mentioned that "We strongly recommended using this utility to improve the config authoring experience — however it was entirely optional."
   *
   * About 'extends' option
   * {@link https://typescript-eslint.io/packages/typescript-eslint#flat-config-extends}
   *
   * This option is depending on 'typescript-eslint'. See the following link for the default eslint configuration: {@link https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package}
   */
  const code = `import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import globals from 'globals';${`\n${imports}`}

${
  hasTypescript
    ? `export default tslintConfig(
${getNext}${`${convertToString(config)},`}${`\n${configs}`}
)`
    : `export default [
${getNext}${`${convertToString(config)},`}${`\n${configs}`}
]`
}`

  const result = code
    .replace(`'fixupConfigRules'`, `...fixupConfigRules(flatCompat.extends('next/core-web-vitals'))`)
    .replace(
      `'replace globals'`,
      `{
      ...globals.browser,
      ...globals.es5,
      ...globals.jest,
      ...globals.node,
      // ...globals.serviceworker,
    }`,
    )
    .replace(`'replace-recommended-eslint-configs-rules': ''`, `...eslint.configs.recommended.rules`)

  return result
}

export default generateEslintFlatConfig
