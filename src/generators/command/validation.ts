import getCertainConditions from '@utils/certainConditions';

const getValidationCommands = () => {
  const { hasJoi, hasReactHookForm } = getCertainConditions();

  const validationDependencies: string[] = [];

  /**
   * joi
   * {@link https://joi.dev}
   */
  if (hasJoi) {
    validationDependencies.push('joi');
  }
  /**
   * react-hook-form (React Hook Form)
   * {@link https://www.react-hook-form.com}
   */
  if (hasReactHookForm) {
    validationDependencies.push('react-hook-form');
  }

  return {
    validationDependencies,
  };
};

export default getValidationCommands;
