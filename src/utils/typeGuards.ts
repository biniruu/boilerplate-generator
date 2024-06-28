const isHtmlInputElement = (element: unknown): element is HTMLInputElement => {
  return element instanceof HTMLInputElement
}

const isHtmlButtonElement = (element: unknown): element is HTMLButtonElement => {
  return element instanceof HTMLButtonElement
}

export { isHtmlButtonElement, isHtmlInputElement }
