import convertToString from '@utils/convertToString';

export const typescriptImport = `import {
  config as tslintConfig,
  configs as tslintConfigs,
  parser as tslintParser,
  plugin as tslintPlugin,
} from 'typescript-eslint';`;

const config = {
  name: 'typescript-eslint', // https://typescript-eslint.io/packages/typescript-eslint
  extends: [
    'replace recommendedTypeChecked', // If we use parserOptions.projectService, this options is required (https://typescript-eslint.io/getting-started/typed-linting)
  ],
  languageOptions: {
    parser: 'replace tslintParser',
    parserOptions: {
      projectService: true, // It will automatically detect the tsconfig.json file like the 'project' option, which is true, but it doesn't treat the 'allowJs' option in tsconfig.json in the same way (https://typescript-eslint.io/packages/parser/#projectservice)
      tsconfigRootDir: 'replace import.meta.dirname', // project에서 제공한 tsconfig의 상대 경로에 대한 루트 디렉토리 제공
    },
  },
  plugins: {
    '@typescript-eslint': 'replace tslintPlugin',
  },
  rules: {
    /**
     * typescript-eslint rules
     * {@link https://typescript-eslint.io/rules/#rules}
     *
     * ban-ts-comment : 설명을 추가하는 조건으로 @ts-expect-error, @ts-ignore, @ts-nocheck, @ts-check 주석을 허용
     * no-explicit-any
     * no-floating-promises
     * @property {Object} 'no-misused-promises' - To prevent passing promises to place that are not designed to handle them.
     * @property {boolean} 'no-misused-promises'.checksVoidReturn.attributes - Weather to check async functions passed as JSX (and <form> tag) attributes.
     * no-unsafe-argument
     * no-unsafe-assignment : any 타입 사용 시 알림을 띄움
     * no-unsafe-call
     * no-unsafe-member-access
     * no-unused-vars : eslint에서 제공하는 no-unused-vars와 동일. no-unused-vars를 비활성화 한 후에 사용할 것
     * no-var-requires : require 문을 변수에 할당 금지. 특정 모듈 문법에 구애 받지 않는 상황이라면 비활성화 할 것
     * restrict-plus-operands
     * restrict-template-expressions
     * space-before-function-paren : 함수 선언 시 함수명과 괄호 사이에 간격 추가를 강제. 공식 문서에서는 사용하지 말 것을 적극 권고한다
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
  },
};

export const typescriptConfig = convertToString(config)
  ?.replace(`'replace recommendedTypeChecked'`, `...tslintConfigs.recommendedTypeChecked`)
  .replace(`'replace tslintParser'`, `tslintParser`)
  .replace(`'replace tslintPlugin'`, `tslintPlugin`)
  .replace(`'replace import.meta.dirname'`, `import.meta.dirname`);
