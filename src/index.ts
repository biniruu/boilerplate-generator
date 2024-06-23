import type { Config } from '_types'
import { stringify } from 'javascript-stringify'

const mainElem = document.getElementById('app') as HTMLElement

const elem = document.createElement('textarea')
elem.classList.add('code')

const getEnv = async () => {
  const { default: data } = await import('@/data/eslint/env.json', { assert: { type: 'json' } })

  return data
}

const generateEnv = async () => {
  const selectedEnv = document.querySelector('input[name="browser"]:checked') as HTMLInputElement
  const env = selectedEnv.value === 'true' ? await getEnv() : null

  return env
}

const handleFormSubmit = async () => {
  const env = await generateEnv()
  const config: Config = env ? { env } : {}
  elem.textContent = `module.exports = ${stringify(config, null, 4)}`
  mainElem.appendChild(elem)
}

const form = document.getElementById('eslint') as HTMLFormElement
form.addEventListener('submit', e => {
  e.preventDefault()

  void handleFormSubmit()
})
