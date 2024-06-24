const data: { [key: string]: unknown } = {
  typescript: await import('@data/eslint/typescript.json'),
  jsxA11y: await import('@data/eslint/jsx-a11y.json'),
  javascript: await import('@data/eslint/javascript.json'),
  next: await import('@data/eslint/next.json'),
  react: await import('@data/eslint/react.json'),
  tailwind: await import('@data/eslint/tailwind.json'),
  jest: await import('@data/eslint/jest.json'),
  tanstackQuery: await import('@data/eslint/tanstack-query.json'),
}

const getEslintConfigs = (selectedVal: string[]) => {
  const config = selectedVal.reduce(
    (acc, curr) => {
      const item = data[curr] as { [key: string]: unknown }
      const currentData = item.default as { [key: string]: unknown }

      for (const option in currentData) {
        if (Object.hasOwn(acc, option)) {
          if (Array.isArray(currentData[option])) {
            acc[option] = [...(acc[option] as string[]), ...(currentData[option] as string[])]
          } else {
            const temp = Object.assign({}, acc[option], currentData[option])
            acc[option] = temp
          }
        } else {
          acc[option] = currentData[option]
        }
      }

      return acc
    },
    {} as { [key: string]: unknown },
  )

  return config
}

export default getEslintConfigs
