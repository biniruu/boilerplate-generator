import getCertainConditions from '@utils/certainConditions';
import convertToString from '@utils/convertToString';
import type { SelectOptions } from '_types';

const generateTailwindConfig = (configOptions: SelectOptions) => {
  const { hasTypescript } = getCertainConditions(configOptions);
  const ts = hasTypescript ? 'ts,tsx' : '';
  const comma = hasTypescript ? ',' : '';

  const config = {
    content: [
      `./src/app/**/*.{js,jsx,mdx${comma}${ts}}`,
      `./src/components/**/*.{js,jsx,mdx${comma}${ts}}`,
      `./src/pages/**/*.{js,jsx,mdx${comma}${ts}}`,
    ],
    theme: {
      extend: {
        zIndex: {},
        fontSize: {},
        colors: {
          green: '#11ac3a',
          red: '#e33920',
          yellow: '#dfb230',
        },
        backgroundColor: 'replace backgroundColor',
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  };

  const code = hasTypescript
    ? `import type { Config } from 'tailwindcss'
  
const config: Config = ${convertToString(config)}

export default config`
    : `/** @type {import('tailwindcss').Config} */

module.exports = ${convertToString(config)}`;

  const result = code.replace(
    `'replace backgroundColor'`,
    `({ theme }) => ({
        ...theme('colors'),
      })`,
  );

  return result;
};

export default generateTailwindConfig;
