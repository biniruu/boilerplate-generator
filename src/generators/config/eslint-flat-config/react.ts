import convertToString from '@utils/convertToString';

export const reactImport = `import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';`;

const configReact = {
  name: 'eslint-plugin-react', // https://github.com/jsx-eslint/eslint-plugin-react#configuration-new-eslintconfigjs
  'replace-react-plugin-configs-recommended': '',
  languageOptions: {
    'replace-react-plugin-configs-recommended-language-option': '',
  },
  plugins: {
    'replace-react-plugin': '',
  },
  rules: {
    /**
     * eslint-plugin-react rules
     * {@link https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules}
     *
     * destructuring-assignment : state, prop 등에 구조분해 할당 적용
     * jsx-curly-brace-presence : jsx 내 불필요한 중괄호 금지
     * jsx-curly-spacing
     * jsx-key : 반복문으로 생성하는 요소에 key 속성 강제. 'react/recommended' 설정 시 활성화
     * jsx-no-useless-fragment : 불필요한 fragment 금지
     * jsx-pascal-case : 컴포넌트 이름을 PascalCase로 강제
     * jsx-no-bind : JSX에서 .bind() 또는 화살표 함수 사용 금지
     * jsx-uses-react : react를 import한 후 JSX 사용 강제. 'react/recommended' 설정 시 활성화. 'no-unused-vars'가 활성화 된 경우 효과 발생. react v17 이후 필요없어짐 {@link https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint How to Upgrade to the New JSX Transform}
     * jsx-uses-vars : JSX를 import한 후 해당 JSX 사용 강제. 'no-unused-vars'가 활성화 된 경우 효과 발생
     * no-direct-mutation-state : state 직접 수정 금지. 'react/recommended' 설정 시 활성화
     * no-unescaped-entities : JSX 안에서 escape 되지 않은 entity 코드 사용 금지. 'react/recommended' 설정 시 활성화
     * no-unknown-property : DOM property에 해당하지 않는 property를 비활성화
     * no-unused-state : 사용하지 않는 state가 있을 시 경고 발생
     * prop-types : prop의 type을 정의하도록 강제. 'react/recommended' 설정 시 활성화. typescript를 사용하면 필요없는 옵션
     * react-in-jsx-scope : component에서 React를 import하지 않을 경우 오류 발생. 'react/recommended' 설정 시 활성화. react v17 이후 필요없어짐 {@link https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint How to Upgrade to the New JSX Transform}
     * self-closing-comp : JSX 태그 안에 하위 태그가 없을 경우 self-closing 태그로 변환
     * static-property-placement : 클래스에서 childContextTypes, contextTypes, contextType, defaultProps, displayName, propTypes를 정의하도록 강제. default : 'static public field'
     */
    'react/destructuring-assignment': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    // 'react/jsx-curly-spacing': ['warn', { when: 'always', children: true, objectLiterals: 'never' }], // prettier와 충돌하여 사용할 수 없음
    'react/jsx-key': 'error',
    'react/jsx-no-useless-fragment': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    'react/jsx-pascal-case': 'warn',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['jsx'],
      },
    ],
    'react/no-unused-state': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: false,
      },
    ],
    'react/static-property-placement': 'warn',
  },
};
const configReactHooks = {
  name: 'eslint-plugin-react-hooks', // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#eslint-plugin-react-hooks
  extends: ['replace reactHooksPlugin'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // react hooks 공식 문서에서 제공하는 규칙을 준수하도록 강제. Roles of Hooks: https://legacy.reactjs.org/docs/hooks-rules.html
  },
};
const configReactRefresh = {
  name: 'eslint-plugin-react-refresh', // https://github.com/ArnaudBarre/eslint-plugin-react-refresh#eslint-plugin-react-refresh-
  plugins: {
    'react-refresh': 'replace reactRefresh', // Validate that components can safely be updated with fast refresh (https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme)
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        // allowConstantExport: true, // Don't warn when a constant (string, number, boolean, templateLiteral) is exported aside one or more components. (https://github.com/ArnaudBarre/eslint-plugin-react-refresh#allowconstantexport-v040)
        allowExportNames: ['metadata'], // To avoid warning for some specific exports (https://github.com/ArnaudBarre/eslint-plugin-react-refresh#allowexportnames-v044)
      },
    ],
  },
};

const config = `${convertToString(configReact)},
${convertToString(configReactHooks)},
${convertToString(configReactRefresh)}`;

export const reactConfig = config
  ?.replace(`'replace-react-plugin-configs-recommended': ''`, `...reactPlugin.configs.flat.recommended`)
  .replace(
    `'replace-react-plugin-configs-recommended-language-option': ''`,
    `...reactPlugin.configs.flat.recommended.languageOption`,
  )
  .replace(`'replace-react-plugin': ''`, 'reactPlugin')
  .replace(
    `'replace reactHooksPlugin': ''`,
    `...fixupConfigRules(flatCompat.extends('plugin:react-hooks/recommended'))`,
  )
  .replace(`'replace reactRefresh': ''`, 'reactRefresh');
