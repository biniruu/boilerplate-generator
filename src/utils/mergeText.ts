export const mergeImports = (text: string[]) => text.filter(value => value !== '').join('\n')

export const mergeConfigs = (text: string[]) => text.filter(value => value !== '').join(',\n')
