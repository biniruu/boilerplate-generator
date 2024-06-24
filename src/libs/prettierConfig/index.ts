import getPrettierConfig from '@libs/prettierConfig/getPrettierConfig'

const generatePrettierConfig = () => {
  const selectedCssLibOption = document.querySelector<HTMLInputElement>('#tailwind')
  const hasTailwind = selectedCssLibOption?.checked

  const config = getPrettierConfig(hasTailwind)

  return config
}

export default generatePrettierConfig
