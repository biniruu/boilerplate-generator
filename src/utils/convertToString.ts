import { stringify } from 'javascript-stringify'

// Convert a JSON string to a JavaScript string
const convertToString = <T>(value: T, replacer?: (value: T) => string) => stringify(value, replacer, 2)

export default convertToString
