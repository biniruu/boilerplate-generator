import convertToString from '@utils/convertToString';

const config = {
  // This configuration has to always come before the '@eslint/js' configuration
  name: 'eslint-config-next',
  extends: [
    'replace fixupConfigRules', // default Next.js eslint rule set (https://nextjs.org/docs/pages/building-your-application/configuring/eslint#core-web-vitals)
  ],
};

export const nextConfig = convertToString(config)?.replace(
  `'replace fixupConfigRules'`,
  `...fixupConfigRules(flatCompat.extends('next/core-web-vitals'))`,
);
