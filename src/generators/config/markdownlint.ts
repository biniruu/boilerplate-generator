import convertToJson from '@utils/convertToJson'

const generateMarkdownlintConfig = () => {
  const config = {
    MD013: false,
    'no-inline-html': {
      allowed_elements: ['details', 'br', 'ins'],
    },
  }

  const result = convertToJson(config)

  return result
}

export default generateMarkdownlintConfig
