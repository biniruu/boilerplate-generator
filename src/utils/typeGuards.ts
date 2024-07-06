const isHtmlInputElement = (element: unknown): element is HTMLInputElement => element instanceof HTMLInputElement

const isHtmlButtonElement = (element: unknown): element is HTMLButtonElement => element instanceof HTMLButtonElement

export { isHtmlButtonElement, isHtmlInputElement }
