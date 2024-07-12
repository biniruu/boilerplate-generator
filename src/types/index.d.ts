import configs from '@data/configs'
import dynamicTabList from '@data/dynamicTabList'
import files from '@data/files'
import { options } from '@data/options'

// See options: /src/data/options.ts
type Option = (typeof options)[number]
type SelectOptions = {
  [K in (typeof options)[number]]: boolean
}

type Condition = MakeType<'has', Capitalize<Option>>
type MakeType<P extends string, F extends string> = `${P}${Capitalize<F>}`

type Tab = ConfigTab | FileTab | 'terminal'
// See files: /src/data/files.ts
type FileTab = (typeof files)[number]
// See configs: /src/data/configs.ts
type ConfigTab = (typeof configs)[number]

type ObjConfigTab = Record<ConfigTab, string>
type ObjFileTab = Record<FileTab, string>

// See dynamicTabList: /src/data/dynamicTabList.ts
type DynamicTabValueList = keyof typeof dynamicTabList

export {
  Condition,
  ConfigTab,
  DynamicTabValueList,
  FileTab,
  MakeType,
  ObjConfigTab,
  ObjFileTab,
  Option,
  SelectOptions,
  Tab,
}
