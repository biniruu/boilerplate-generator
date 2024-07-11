const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('Code copied to clipboard')
  } catch (err) {
    console.error('Failed to copy code: ', err)
    alert('Something went wrong with copying code to Clipboard')
  }
}

export default copyToClipboard
