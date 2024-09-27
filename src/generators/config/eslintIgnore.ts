import getCertainConditions from '@utils/certainConditions';

const generateEslintIgnoreConfig = () => {
  const { hasReact, hasStorybook, hasTypescript, hasWordpress } = getCertainConditions();

  const storybook =
    hasStorybook &&
    `
storybook-static/
!.storybook`;
  const tsconfig =
    hasTypescript &&
    `
**/tsconfig.json`;
  const tsconfigs =
    hasTypescript &&
    !hasReact &&
    !hasWordpress &&
    `
**/tsconfig.build.json
**/tsconfig.default.json
**/tsconfig.test.json`;

  const config = `# files${tsconfig || ''}${tsconfigs || ''}

# paths
node_modules/${storybook || ''}`;

  return config;
};

export default generateEslintIgnoreConfig;
