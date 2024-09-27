import getCertainConditions from '@utils/certainConditions';
/**
 * @example
 *
 * ```js
 * overrides: [
 *   {
 *     customSyntax: 'postcss-html',
 *     files: ['**\/*.{html,jsx,tsx}'],
 *   },
 *   {
 *     customSyntax: 'postcss-styled-syntax',
 *     files: ['**\/*.{html,jsx,tsx}'],
 *   },
 * ],
 * ```
 */
const getOverrides = () => {
  const { hasPostcss, hasStyledComponents } = getCertainConditions();
  const result = [];

  /**
   * PostCSS
   *
   * postcss-html : html 또는 html과 유사한 형식을 가진 파일, Vue Single-File Components 등에서 postcss를 사용하도록 지원. scss, less 등을 사용하는 프로젝트에서는 별도 패키지 추가 필요 {@link https://www.npmjs.com/package/postcss-html}
   */
  if (hasPostcss) {
    result.push({
      customSyntax: 'postcss-html',
      files: ['**/*.{html,jsx,tsx}'],
    });
  }
  /**
   * PostCSS for styled-components
   *
   * postcss-styled-syntax : styled-components 지원 {@link https://styled-components.com/docs/tooling#stylelint}
   */
  if (hasPostcss && hasStyledComponents) {
    result.push({
      customSyntax: 'postcss-styled-syntax',
      files: ['**/*.{html,jsx,tsx}'],
    });
  }

  return result;
};

export default getOverrides;
