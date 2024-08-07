import type { Option } from '_types'

import { toggleChecked, toggleDisabled } from './optionController'

const setReactProject = () => {
  toggleChecked('vite')
  toggleDisabled('vite')
}

const setProjects = {
  react: setReactProject,
}

const isProject = (option: Option): option is keyof typeof setProjects => Object.keys(setProjects).includes(option)

// Automatically select/deselect or enable/disable based on specific options
const toggleOptionState = (option: Option) => {
  isProject(option) && setProjects[option as keyof typeof setProjects]()
}

export default toggleOptionState
