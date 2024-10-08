import configs from '@data/configs';
import dynamicTabList from '@data/dynamicTabList';
import files from '@data/files';
import { jsLib, options } from '@data/options';

// See options: /src/data/options.ts
export type Option = (typeof options)[number];
export type SelectOptions = {
  [K in (typeof options)[number]]: boolean;
};

export type Condition = MakeType<'has', Capitalize<Option>>;
type MakeType<P extends string, F extends string> = `${P}${Capitalize<F>}`;

export type Tab = ConfigTab | FileTab | 'terminal' | 'readme';
// See files: /src/data/files.ts
export type FileTab = (typeof files)[number];
// See configs: /src/data/configs.ts
export type ConfigTab = (typeof configs)[number];

export type ObjConfigTab = Record<ConfigTab, string>;
export type ObjFileTab = Record<FileTab, string>;

// See dynamicTabList: /src/data/dynamicTabList.ts
export type DynamicTabValueList = keyof typeof dynamicTabList;

export type JsLib = (typeof jsLib)[number];

export interface Config {
  name: string;
  extends?: string[];
  files?: string[];
  ignores?: string[];
  languageOptions?: {
    globals?: string;
    parser?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parserOptions?: Record<string, any>;
  };
  plugins?: Record<string, string>;
  rules?: Record<string, string | Array<string | object>>;
  settings?: Record<string, string | object>;
}
