import getEslintConfig from '@libs/eslintConfig/getEslintConfig'

const generateEslintConfig = () => {
  const selectedCheckboxOptions = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked')
  const selectedSyntax = document.querySelector<HTMLInputElement>('input[name="syntax"]:checked')
  const selectedWebDevLib = document.querySelector<HTMLInputElement>('input[name="web-development-library"]:checked')

  const checkboxOptions = Array.from(selectedCheckboxOptions).map((checkbox: HTMLInputElement) => checkbox.value)
  const selectedOptions = [...checkboxOptions, selectedSyntax!.value]
  const options =
    selectedWebDevLib!.value === 'nothing' ? selectedOptions : [...selectedOptions, selectedWebDevLib!.value]

  const config = getEslintConfig(options)

  return config
}

export default generateEslintConfig
