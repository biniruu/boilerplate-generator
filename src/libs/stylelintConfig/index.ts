import getStylelintConfig from '@libs/stylelintConfig/getStylelintConfig'

const generateStylelintConfig = () => {
  const selectedCssLibOptions = document.querySelectorAll<HTMLInputElement>('.css-lib')
  const cssLibOptions = Array.from(selectedCssLibOptions).reduce((acc, curr) => {
    if (curr.checked) {
      acc.push(curr.value)
    }

    return acc
  }, [] as string[])

  const config = cssLibOptions.length ? getStylelintConfig(cssLibOptions) : getStylelintConfig()

  return config
}

export default generateStylelintConfig
