import convertToJson from '@utils/convertToJson'
import type { SelectOptions } from '_types'

const getTsBuild = (configOptions: SelectOptions) => {
  const hasJest = configOptions.jest
  const hasNext = configOptions?.next

  const jestInclude = hasJest
    ? ['**/tests/**/*.spec.ts', '**/tests/**/*.spec.tsx', '**/tests/**/*.test.ts', '**/tests/**/*.test.tsx']
    : []
  const nextInclude = hasNext ? ['next-env.d.ts', '.next/types/**/*.ts', 'dist/types/**/*.ts'] : []

  const config = {
    compilerOptions: {
      ...(hasNext
        ? {
            /* Editor Support */
            plugins: [
              {
                name: 'next',
              },
            ],
          }
        : {}),
      // "declaration": true, // Generate .d.ts files from TypeScript and JavaScript files in your project.
      sourceMap: false, // Create source map files for emitted JavaScript files.
    },
    extends: './tsconfig.default.json',
    include: ['**/src/**/*.ts', '**/src/**/*.tsx', ...jestInclude, ...nextInclude],
  }

  const result = convertToJson(config)

  return result
}

export default getTsBuild
