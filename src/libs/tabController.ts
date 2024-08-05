import { isTab } from '@utils/typeGuards'
import type { SelectOptions } from '_types'

import { provideConfig } from './editorController'

export const handleTab = (target: HTMLButtonElement, value: string, options: SelectOptions) => {
  // Remove 'active' class from the previous activated tab
  const elemCurrentTab = getActivatedTab()
  elemCurrentTab?.classList.remove('active')
  // Add 'active' class to the clicked tab
  target.classList.add('active')
  isTab(value) && provideConfig(value, options)
}

export const getActivatedTab = () => {
  const elemTablinks = document.querySelectorAll<HTMLButtonElement>('.tablinks')
  const elemCurrentTab = Array.from(elemTablinks).find(tab => tab.classList.contains('active'))

  return elemCurrentTab
}
