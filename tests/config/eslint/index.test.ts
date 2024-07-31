import { objOptions } from '@data/options'
import generateEslintConfig from '@generators/config/eslint'

const setTextContent = () => {
  if (elemCode) {
    elemCode.textContent = generateEslintConfig(objOptions)
  }
}

let elemCode: HTMLElement | null

beforeEach(() => {
  document.body.innerHTML = `<code id="code" />`
  elemCode = document.querySelector<HTMLElement>('#code')

  // Reset objOptions
  for (const key in objOptions) {
    objOptions[key as keyof typeof objOptions] = false
  }
})

test('should generate an ESLint configuration for VanillaScript', () => {
  setTextContent()

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for TypeScript', () => {
  objOptions.typescript = true

  setTextContent()

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for React.js with TypeScript', () => {
  objOptions.react = true
  objOptions.typescript = true

  setTextContent()

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for React.js without TypeScript', () => {
  objOptions.react = true

  setTextContent()

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for Next.js with TypeScript', () => {
  objOptions.next = true
  objOptions.typescript = true

  setTextContent()

  expect(elemCode?.textContent).toMatchSnapshot()
})

test('should generate an ESLint configuration for Next.js without TypeScript', () => {
  objOptions.next = true

  setTextContent()

  expect(elemCode?.textContent).toMatchSnapshot()
})
