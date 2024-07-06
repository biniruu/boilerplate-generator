import getCertainConditions from '@utils/certainConditions'
import type { SelectOptions } from '_types'

// overrides: [
//   {
//     /**
//      * PostCSS
//      *
//      * postcss-html : html 또는 html과 유사한 형식을 가진 파일, Vue Single-File Components 등에서 postcss를 사용하도록 지원. scss, less 등을 사용하는 프로젝트에서는 별도 패키지 추가 필요 {@link https://www.npmjs.com/package/postcss-html}
//      */
//     customSyntax: 'postcss-html',
//     files: ['**/*.{html,jsx,tsx}'],
//   },
//   {
//     /**
//      * PostCSS for styled-components
//      *
//      * postcss-styled-syntax : styled-components 지원 {@link https://styled-components.com/docs/tooling#stylelint}
//      */
//     customSyntax: 'postcss-styled-syntax',
//     files: ['**/*.{html,jsx,tsx}'],
//   },
// ],
const getOverrides = (configOptions: SelectOptions) => {
  const { hasPostcss, hasStyledComponents } = getCertainConditions(configOptions)
  const result = []

  if (hasPostcss) {
    result.push({
      customSyntax: 'postcss-html',
      files: ['**/*.{html,jsx,tsx}'],
    })
  }
  if (hasPostcss && hasStyledComponents) {
    result.push({
      customSyntax: 'postcss-styled-syntax',
      files: ['**/*.{html,jsx,tsx}'],
    })
  }

  return result
}

export default getOverrides
