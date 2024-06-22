import { stringify } from 'javascript-stringify'

import env from '@/data/eslint/env.json'

const mainElem = document.getElementById('app') as HTMLElement
// const sidebarElem = document.getElementById('sidebar')

const elem = document.createElement('textarea')
elem.classList.add('code')
// elem.textContent = stringify(jestTypescript, null, '\n') as string
elem.textContent = stringify(env, null, 4) as string
// elem.textContent = JSON.stringify(jestConfig)
mainElem.appendChild(elem)
