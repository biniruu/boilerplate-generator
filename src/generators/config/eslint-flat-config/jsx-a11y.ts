import getCertainConditions from '@utils/certainConditions';
import convertToString from '@utils/convertToString';
import type { SelectOptions } from '_types';

export const jsxA11yImport = `import jsxA11y from 'eslint-plugin-jsx-a11y';`;

export const jsxA11yConfig = (configOptions: SelectOptions) => {
  const { hasNuxt } = getCertainConditions(configOptions);

  const config = {
    name: 'eslint-plugin-jsx-a11y', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#usage---flat-config-eslintconfigjs
    rules: {
      /**
       * eslint-plugin-jsx-a11y
       * {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules}
       *
       * label-has-associated-control : 기본 html 태그가 아닌 custom component에서 웹 접근성 관련 에러 발생 방지
       * no-noninteractive-element-interactions : (웹 접근성 문제로)상호작용하지 않는 태그(li, div 등)에 onClick 등과 같은 이벤트를 연결할 때 필요
       * no-noninteractive-element-to-interactive-role : (웹 접근성 문제로)상호작용하지 않는 태그에 onClick 등과 같은 이벤트를 연결하고 해당 태그의 사용 목적을 role 속성으로 명시할 때 필요
       */
      ...(!hasNuxt && { 'replace-j11y-recommended': '' }),
      'jsx-a11y/label-has-associated-control': [
        'warn',
        {
          labelComponents: ['label'],
          labelAttributes: ['htmlFor'],
          controlComponents: ['Input'],
          depth: 1,
        },
      ],
      'jsx-a11y/no-noninteractive-element-interactions': [
        'warn',
        {
          handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        'warn',
        {
          ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          li: ['button', 'menuitem', 'option', 'row', 'tab', 'treeitem'],
          table: ['grid'],
          td: ['gridcell'],
        },
      ],
    },
  };

  const result = convertToString(config)?.replace(
    `'replace-j11y-recommended': ''`,
    `...jsxA11y.flatConfigs.recommended.rules`,
  );

  if (!result) {
    throw new Error('jsxA11y config is not defined');
  }

  return result;
};
