declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '@utils/mergeConfigs' {
  type MergeConfigs = (
    acc: {
      [key: string]: unknown
    },
    option: string,
    currentData: {
      [key: string]: unknown
    },
  ) => void

  const mergeConfigs: MergeConfigs
  export default mergeConfigs
}
