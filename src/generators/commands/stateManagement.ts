import { SelectOptions } from '_types'

const getStateManagementCommands = (configOptions: SelectOptions) => {
  const hasRecoil = configOptions.recoil

  const stateManagementDependencies: string[] = []

  if (hasRecoil) {
    stateManagementDependencies.push('recoil')
  }

  return {
    stateManagementDependencies,
  }
}

export default getStateManagementCommands
