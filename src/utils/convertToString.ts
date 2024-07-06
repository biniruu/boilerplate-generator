import { stringify } from 'javascript-stringify'

const convertToString = <T>(value: T, replacer?: (value: T) => string) => stringify(value, replacer, 2)

export default convertToString
