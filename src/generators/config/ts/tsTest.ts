import convertToJson from '@utils/convertToJson'
import type { SelectOptions } from '_types'

const getTsTest = (configOptions: SelectOptions) => {
  const hasNext = configOptions.next

  const config = {
    ...(hasNext
      ? {
          compilerOptions: {
            jsx: 'react-jsx',
          },
        }
      : {}),
    extends: './tsconfig.json',
  }
  const result = convertToJson(config)

  return result
}

export default getTsTest
