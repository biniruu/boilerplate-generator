import type { JsLib, Option } from '_types'

let precedingOption: JsLib = 'nothing'
const toggleOptionState = (option: JsLib) => {
  switch (option) {
    case 'react':
      controlReact()
      break

    default:
      // TODO: Ensure that the 'vite' option remains checked if it was already checked before this function is invoked
      precedingOption === 'react' && controlVite()
      break
  }
  precedingOption = option
}

const controlReact = () => {
  const isCheckedVite = isChecked(getOptionElem('vite'))
  !isCheckedVite && toggleChecked('vite')
  toggleDisabled('vite')
}
const controlVite = () => {
  const isDisabledVite = isDisabled(getOptionElem('vite'))
  isDisabledVite && toggleDisabled('vite')
  toggleChecked('vite')
}

const toggleChecked = (value: Option) => getOptionElem(value)?.click()
const toggleDisabled = (value: Option) => {
  const elem = getOptionElem(value)
  if (elem) {
    elem.disabled = !elem.disabled
  }
}

const getOptionElem = (option: Option) => document.querySelector<HTMLInputElement>(`#${option}`)
const isChecked = (element: HTMLInputElement | null) => {
  if (element) {
    return element.checked
  }
  console.error('Element not found')
}
const isDisabled = (element: HTMLInputElement | null) => {
  if (element) {
    return element.disabled
  }
  console.error('Element not found')
}

export default toggleOptionState
