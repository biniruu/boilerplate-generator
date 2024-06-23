import type { Config } from '_types'
import { stringify } from 'javascript-stringify'

import env from '@/data/eslint/env.json'

const mainElem = document.getElementById('app') as HTMLElement

const elem = document.createElement('textarea')
elem.classList.add('code')

const getEslintBtn = document.getElementById('getEslintBtn') as HTMLButtonElement

const getEslint = () => {
  const config: Config = { env }
  elem.textContent = `module.exports = ${stringify(config, null, 4)}`
  mainElem.appendChild(elem)
}

getEslintBtn.addEventListener('click', getEslint)
