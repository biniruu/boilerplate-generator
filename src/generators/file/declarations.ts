const getDeclarationsFile = () => {
  const file = `declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}`

  return file
}

export default getDeclarationsFile
