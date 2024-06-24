import getPostcssConfig from '@libs/postcss/getPostcssConfig'

const generatePostcssConfig = () => {
  const selectedCssLibOptions = document.querySelectorAll<HTMLInputElement>('.css-lib')
  const cssLibOptions = Array.from(selectedCssLibOptions).reduce((acc, curr) => {
    if (curr.checked) {
      acc.push(curr.value)
    }

    return acc
  }, [] as string[])

  const config = cssLibOptions.length ? getPostcssConfig(cssLibOptions) : getPostcssConfig()

  return config
}

export default generatePostcssConfig
