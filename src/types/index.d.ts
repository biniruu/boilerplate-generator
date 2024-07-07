import configs from '@data/configs'
import files from '@data/files'
import { options } from '@data/options'

// See options: /src/data/options.ts
export type Option = (typeof options)[number]
export type SelectOptions = {
  [K in (typeof options)[number]]: boolean
}

export type Condition = MakeType<'has', Capitalize<Option>>
type MakeType<P extends string, F extends string> = `${P}${Capitalize<F>}`

export type Tab = ConfigTab | FileTab
// See files: /src/data/files.ts
export type FileTab = (typeof files)[number]
// See configs: /src/data/configs.ts
export type ConfigTab = (typeof configs)[number]

export type ObjConfigTab = Record<ConfigTab, string>
export type ObjFileTab = Record<FileTab, string>
