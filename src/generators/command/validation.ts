import type { SelectOptions } from '_types'

const getValidationCommands = (configOptions: SelectOptions) => {
  const hasJoi = configOptions.joi
  const hasReactHookForm = configOptions.reactHookForm

  const validationDependencies: string[] = []

  /**
   * joi
   * {@link https://joi.dev}
   */
  if (hasJoi) {
    validationDependencies.push('joi')
  }
  /**
   * react-hook-form (React Hook Form)
   * {@link https://www.react-hook-form.com}
   */
  if (hasReactHookForm) {
    validationDependencies.push('react-hook-form')
  }

  return {
    validationDependencies,
  }
}

export default getValidationCommands
