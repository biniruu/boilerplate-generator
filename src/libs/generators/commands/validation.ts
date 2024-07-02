import { SelectOptions } from '_types'

const getValidationCommands = (configOptions: SelectOptions) => {
  const hasJoi = configOptions.joi
  const hasNext = configOptions.next
  const hasReact = configOptions.react
  const hasReactHookForm = configOptions.reactHookForm

  const validationDependencies: string[] = []
  const validationDevDependencies: string[] = []

  if (hasJoi) {
    validationDependencies.push('joi')
  }
  if (hasReactHookForm && (hasReact || hasNext)) {
    validationDependencies.push('react-hook-form')
  }

  return {
    validationDependencies,
    validationDevDependencies,
  }
}

export default getValidationCommands
