const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Code copied to clipboard');
  } catch (err) {
    const error = err as Error;
    console.error('Failed to copy code: ', error.message);
    alert('Something went wrong with copying code to Clipboard');
  }
};

export default copyToClipboard;
