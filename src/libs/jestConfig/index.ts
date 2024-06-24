import getJestConfig from '@libs/jestConfig/getJestConfig'

const generateJestConfig = () => {
  const selectedSyntaxOption = document.querySelector<HTMLInputElement>('input[name=syntax]:checked')
  const config = getJestConfig(selectedSyntaxOption!.value as 'javascript' | 'typescript')

  return config
}

export default generateJestConfig
