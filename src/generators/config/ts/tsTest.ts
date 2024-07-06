import getCertainConditions from '@utils/certainConditions'
import convertToJson from '@utils/convertToJson'
import type { SelectOptions } from '_types'

const getTsTest = (configOptions: SelectOptions) => {
  const { hasNext } = getCertainConditions(configOptions)

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
