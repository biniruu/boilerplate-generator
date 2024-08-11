import toggleOptionState from '@libs/optionState'

test(`should set the option 'vite' to checked and disabled when setReactProject is invoked with 'react' argument if the option is unchecked and enabled`, () => {
  document.body.innerHTML = `
    <div>
      <input type="checkbox" id="vite">
    </div>
  `

  toggleOptionState('react')

  const elemViteOption = document.querySelector<HTMLInputElement>('#vite')
  expect(elemViteOption && elemViteOption.checked).toBe(true)
  expect(elemViteOption && elemViteOption.disabled).toBe(true)
})

test(`should set the option 'vite' to disabled when setReactProject is invoked with the 'react' argument if the option is checked but is not disabled`, () => {
  document.body.innerHTML = `
    <div>
      <input type="checkbox" id="vite" checked>
    </div>
  `

  toggleOptionState('react')

  const elemViteOption = document.querySelector<HTMLInputElement>('#vite')
  expect(elemViteOption && elemViteOption.checked).toBe(true)
  expect(elemViteOption && elemViteOption.disabled).toBe(true)
})

test(`should set the option 'vite' to unchecked and enabled when setReactProject is invoked with the 'react' argument if the option is unchecked and enabled`, () => {
  document.body.innerHTML = `
    <div>
      <input type="checkbox" id="vite">
    </div>
  `

  // The 'vite' option will be checked and disabled
  toggleOptionState('react')
  // The 'vite' option will be unchecked and enabled
  toggleOptionState('nuxt')

  const elemViteOption = document.querySelector<HTMLInputElement>('#vite')
  expect(elemViteOption && elemViteOption.checked).toBe(false)
  expect(elemViteOption && elemViteOption.disabled).toBe(false)
})
