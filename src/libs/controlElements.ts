import elementTypes from '@libs/elements'
import { isHtmlInputElement } from '@utils/typeGuards'

// const toggleChecked = ({ type, name }: Props) => {
//   if (!type || !name) {
//     console.error('Type is undefined.')

//     return
//   }
//   const elemType = elementTypes[type]
//   const input: HTMLInputElement = elemType[name as keyof typeof elemType]
//   const checked = input.checked
//   input.checked = !checked
// }

// const getCheckedInputValue = (type: Props['type']) => {
//   if (type === 'syntaxInputs' || type === 'webDevLibInputs') {
//     return document.querySelector<HTMLInputElement>(`input[name=web-development-library]:checked`)?.value
//   }
// }

const getElemType = (target: Target) => {
  switch (target) {
    case 'vite':
    case 'viteWrapper':
      return 'moduleBundlerInputs'
    case 'viteTab':
      return 'tabs'
  }
}

const getElement = (target: Target) => {
  const type: Type = getElemType(target)
  const elemType = elementTypes[type]
  if (elemType) {
    const elem = elemType[target as keyof typeof elemType]

    return elem
  }
}

const handleElemActivation = (target: Target, state: ElemActivation) => {
  const elem = getElement(target)
  if (state === 'activate') {
    elem?.classList.add('active')

    return
  }
  elem?.classList.remove('active')
}

const handleElemView = (target: Target, state: ElemView) => {
  const elem = getElement(target)
  if (state === 'show') {
    elem?.classList.remove('hidden')

    return
  }
  elem?.classList.add('hidden')
}

const getElemState = (target: Target) => {
  const elem = getElement(target)

  return elem?.classList.contains('hidden')
}

const handleElemCheck = (target: Target) => {
  const elem = getElement(target)
  if (elem && isHtmlInputElement(elem)) {
    elem.checked = false
  }
}

const getCheckedElem = (target: Target) => {
  const type: Type = getElemType(target)
  const elemType = elementTypes[type]

  for (const elem in elemType) {
    const element = elemType[elem as keyof typeof elemType]
    if (isHtmlInputElement(element) && element.checked) {
      return element.value
    }
  }
}

const getCheckedElemVal = (target: Target) => {
  const elem = getCheckedElem(target)
  if (elem && isHtmlInputElement(elem)) {
    return elem.checked
  }
}

const controlElements = ({ target, action, state }: ControlInputsProps) => {
  switch (action) {
    case 'activate':
      handleElemActivation(target, 'activate')
      break
    case 'deactivate':
      handleElemActivation(target, 'deactivate')
      break
    case 'show':
      handleElemView(target, 'show')
      break
    case 'hide':
      handleElemView(target, 'hide')
      break
    case 'uncheck':
      handleElemCheck(target)
      break
    case 'getState':
      if (state === 'show') {
        return getElemState(target)
      }
      if (state === 'checked') {
        return getCheckedElemVal(target)
      }
  }
}

export default controlElements

type Type = 'syntaxInputs' | 'webDevLibInputs' | 'moduleBundlerInputs' | 'tabs' | 'editors'
type Target = 'vite' | 'viteWrapper' | 'viteTab'
type ElemView = 'show' | 'hide'
type ElemActivation = 'activate' | 'deactivate'
type Action = ElemView | ElemActivation | 'getState' | 'uncheck'
type State = 'show' | 'checked'

interface ControlInputsProps {
  target: Target
  action: Action
  state?: State
}
