const getDeclarationsFile = () => {
  const file = `declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
  
declare module '@utils/typeGuards' {
  type IsHtmlInputElement = (element: unknown) => element is HTMLInputElement
  type IsHtmlButtonElement = (element: unknown) => element is HTMLButtonElement

  const isHtmlInputElement: IsHtmlInputElement
  const isHtmlButtonElement: IsHtmlButtonElement

  export { isHtmlButtonElement, isHtmlInputElement }
}`

  return file
}

export default getDeclarationsFile
