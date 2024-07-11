import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

/**
 * Extends
 *
 * eslint:recommended : eslint 추천 rule set
 * next/core-web-vitals : create next app으로 프로젝트 시작 시 기본 설정
 * plugin:@tanstack/eslint-plugin-query/recommended : recommended rules for tanstack-query
 * plugin:@typescript-eslint/recommended-type-checked : typescript-eslint v6 이상 추천 룰셋
 * {@link https://typescript-eslint.io/linting/typed-linting/}
 * {@link https://typescript-eslint.io/blog/announcing-typescript-eslint-v6/#user-facing-breaking-changes}
 * plugin:import/recommended : eslint-plugin-import 추천 rule set
 * plugin:import/typescript : eslint-plugin-import 플러그인
 * plugin:jsx-a11y/recommended : 웹 접근성 관련 추천 rule set
 * plugin:react/recommended : (make sure this is always before react/jsx-runtime) recommended eslint-plugin-react rules
 * plugin:react/jsx-runtime : when using the new JSX transform from React 17, it will disable the relevant rules
 * plugin:react-hooks/recommended : recommended eslint-plugin-react-hooks rules
 * plugin:storybook/recommended: recommended rules for Storybook
 * {@link https://github.com/storybookjs/eslint-plugin-storybook#readme}
 * plugin:tailwindcss/recommended : Rules enforcing best practices and consistency using Tailwind CSS
 *
 * @example
 *
 * ```js
 * extends: [
 *   'eslint:recommended',
 *   'next/core-web-vitals',
 *   'plugin:@tanstack/eslint-plugin-query/recommended',
 *   'plugin:@typescript-eslint/recommended-type-checked',
 *   'plugin:import/recommended',
 *   'plugin:import/typescript',
 *   'plugin:jsx-a11y/recommended',
 *   'plugin:react/recommended',
 *   'plugin:react/jsx-runtime',
 *   'plugin:react-hooks/recommended',
 *   'plugin:storybook/recommended'
 *   'plugin:tailwindcss/recommended',
 * ]
 * ```
 */
const mergeExtends = (configOptions: SelectOptions) => {
  const { hasTypescript, hasNext, hasReact, hasStorybook, hasTanstackQuery, hasTailwind } =
    getCertainConditions(configOptions)

  let result = ['eslint:recommended', 'plugin:import/recommended']
  const react = [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ]

  if (hasTypescript) {
    result = [...result, 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended-type-checked']
  }
  if (hasNext) {
    result = [...result, 'next/core-web-vitals', ...react]
  }
  if (hasReact) {
    result = [...result, ...react]
  }
  if (hasStorybook) {
    result = [...result, 'plugin:storybook/recommended']
  }
  if (hasTanstackQuery) {
    result = [...result, 'plugin:@tanstack/eslint-plugin-query/recommended']
  }
  if (hasTailwind) {
    result = [...result, 'plugin:tailwindcss/recommended']
  }

  return result
}

export default mergeExtends
