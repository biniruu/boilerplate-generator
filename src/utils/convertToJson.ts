// Convert a JavaScript object into a JSON string
const convertToJson = (config: { [key: string]: unknown }) => JSON.stringify(config, null, 2)

export default convertToJson
