import inputTypes from '@libs/elements'

const toggleChecked = ({ type, name }: Props) => {
  if (!type || !name) {
    console.error('Type is undefined.')

    return
  }
  const inputType = inputTypes[type]
  const input: HTMLInputElement = inputType[name as keyof typeof inputType]
  const checked = input.checked
  input.checked = !checked
}

const getCheckedInputValue = (type: Props['type']) => {
  if (type === 'syntaxInputs' || type === 'webDevLibInputs') {
    return document.querySelector<HTMLInputElement>(`input[name=web-development-library]:checked`)?.value
  }
}

export const controlInputs = ({ action, type, name }: ControlInputsProps) => {
  switch (action) {
    case 'toggleChecked':
      return toggleChecked({ type, name })
    case 'getCheckedValue':
      return getCheckedInputValue(type)
  }
}

interface Props {
  type?: 'syntaxInputs' | 'webDevLibInputs'
  name?: 'typescript' | 'javascript' | 'react' | 'next' | 'nothing'
}

interface ControlInputsProps extends Props {
  action:
    | 'toggleChecked'
    | 'getElem'
    | 'getVal'
    | 'getCheckedValue'
    | 'setChecked'
    | 'addClass'
    | 'removeClass'
    | 'hasClass'
    | 'toggleClass'
}

interface HandleClassProps extends Props {
  value: 'hide' | 'active'
}
