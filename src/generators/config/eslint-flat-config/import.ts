import convertToString from '@utils/convertToString';

export const importPluginImport = `import importPlugin, { configs as importConfigs } from 'eslint-plugin-import';`;

// const recommendedFlatConfig = 'importPlugin.flatConfigs.recommended' // https://github.com/import-js/eslint-plugin-import#eslint-plugin-import
const config = {
  name: 'eslint-plugin-import', // https://github.com/import-js/eslint-plugin-import#eslint-plugin-import
  extends: [
    /**
     * importConfigs.recommended : recommended eslint-plugin-import rule set
     * importConfigs.react : recommended eslint-plugin-import rule set for React.js
     * importConfigs.typescript : recommended eslint-plugin-import rule set for TypeScript
     *
     * {@link https://github.com/import-js/eslint-plugin-import#config---flat-eslintconfigjs}
     * {@link https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-2267581659}
     * {@link https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-2272395246}
     */
    'replace fixupConfigRules',
  ],
  plugins: {
    import: 'replace fixupPluginRules',
  },
  rules: {
    /**
     * eslint-plugin-import rules
     * {@link https://github.com/import-js/eslint-plugin-import#rules}
     *
     * consistent-type-specifier-style : type-only import를 inline과 top-level 중 하나로만 사용하도록 강제
     * newline-after-import : import 다음에 한 줄 띄기
     * no-anonymous-default-export : 익명 default export 금지
     * no-duplicates : enforce all imports to be inline or top-level when importing multiple times from the same module.
     * no-unresolved : import한 파일/모듈이 unresolved 되는 일이 없도록 방지
     * order : import 자동 정렬
     * order > alphabetize : Make sure it is always set as the default. If not, it can cause conflicts with prettier.
     * order > warnOnUnassignedImports는 항상 default값(false)으로 놔둘 것. true로 할 경우 import 정렬 관련 경고가 발생하는데, 이 문제는 import/order 또는 sort-import 설정만으로는 해결 불가
     * order > caseInsensitive의 값은 항상 default값(false)으로 놔둘 것. true로 했을 때 가끔 다른 import 정렬 관련 rule과 충돌 발생
     */
    'import/consistent-type-specifier-style': 'warn',
    'import/newline-after-import': [
      'warn',
      {
        exactCount: true,
        considerComments: true,
      },
    ],
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowArray: true,
        allowObject: true,
      },
    ],
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        // alphabetize: {
        //   order: 'asc',
        //   orderImportKind: 'asc',
        // },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};

export const importPluginConfig = convertToString(config)
  ?.replace(
    `'replace fixupConfigRules'`,
    `...fixupConfigRules(
      flatCompat.config(importConfigs.recommended, importConfigs.react, importConfigs.typescript),
    )`,
  )
  .replace(`'replace fixupPluginRules'`, `fixupPluginRules(importPlugin)`);

// TODO: Use this instead of the export above if eslint-plugin-import supports the eslint flat config
// const result = convertToString(config)
//   ?.replace(
//     `'replace fixupConfigRules'`,
//     `...fixupConfigRules(
//     flatCompat.config(importConfigs.recommended, importConfigs.react, importConfigs.typescript),
//   )`,
//   )
//   .replace(`'replace fixupPluginRules'`, `fixupPluginRules(importPlugin)`)
// export const importPluginConfig = recommendedFlatConfig.concat('\n', result)
