import convertToJson from '@utils/convertToJson'

const getTsNode = () => {
  const config = {
    compilerOptions: {
      composite: true,
      skipLibCheck: true,
      module: 'ESNext',
      moduleResolution: 'Node',
      allowSyntheticDefaultImports: true,
      strict: true,
    },
    include: ['vite.config.ts'],
  }

  const result = convertToJson(config)

  return result
}

export default getTsNode
