import toggleOptionState, { setState } from '@libs/optionState'

beforeEach(() => {
  setState({ precedingOption: 'nothing' })
})

test(`should set the option 'vite' to checked and disabled when controlReact is invoked if the option is unchecked and enabled`, () => {
  document.body.innerHTML = `<div><input type="checkbox" id="vite"></div>`

  toggleOptionState('react')

  const elemViteOption = document.querySelector<HTMLInputElement>('#vite')
  expect(elemViteOption && elemViteOption.checked).toBe(true)
  expect(elemViteOption && elemViteOption.disabled).toBe(true)
})

test(`should set the option 'vite' to disabled when controlReact is invoked if the option is checked but is not disabled`, () => {
  document.body.innerHTML = `<div><input type="checkbox" id="vite" checked></div>`

  toggleOptionState('react')

  const elemViteOption = document.querySelector<HTMLInputElement>('#vite')
  expect(elemViteOption && elemViteOption.checked).toBe(true)
  expect(elemViteOption && elemViteOption.disabled).toBe(true)
})

test(`should set the option 'vite' to unchecked and enabled when controlReact is invoked if the option is checked and disabled`, () => {
  document.body.innerHTML = `<div><input type="checkbox" id="vite" checked disabled></div> `
  setState({ precedingOption: 'react' })

  toggleOptionState('react')

  const elemViteOption = document.querySelector<HTMLInputElement>('#vite')
  expect(elemViteOption && elemViteOption.checked).toBe(false)
  expect(elemViteOption && elemViteOption.disabled).toBe(false)
})
