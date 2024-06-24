type MergeConfigs = (
  acc: {
    [key: string]: unknown
  },
  option: string,
  currentData: {
    [key: string]: unknown
  },
) => void

const mergeConfigs: MergeConfigs = (acc, option, currentData) => {
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

export default mergeConfigs
