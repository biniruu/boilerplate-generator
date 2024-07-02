import { SelectOptions } from '_types'

// parser
const mergeParser = (configOptions: SelectOptions) =>
  configOptions.typescript ? '@typescript-eslint/parser' : '@babel/eslint-parser'

export default mergeParser
