import type { SelectOptions } from '_types'

const getExtension = (configOptions: SelectOptions) => (configOptions.typescript ? 'ts' : 'js')

export default getExtension
