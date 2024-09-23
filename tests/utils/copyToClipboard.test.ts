import copyToClipboard from '@utils/copyToClipboard';

const text = 'Hello, World!';
Object.defineProperty(global.navigator, 'clipboard', {
  value: { writeText: jest.fn() },
  writable: true,
});
global.window.alert = jest.fn();

test('should copy text to clipboard successfully', async () => {
  const writeTextMock = jest.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation();

  await copyToClipboard(text);

  expect(writeTextMock).toHaveBeenCalledWith(text);
  expect(alertMock).toHaveBeenCalledWith('Code copied to clipboard');
});

test('should clipboard write operation fails', async () => {
  const error = new Error('Failed to copy to clipboard');
  const writeTextMock = jest.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(error);
  const alertMock = jest.spyOn(window, 'alert').mockImplementation();
  const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();

  await copyToClipboard(text);

  expect(writeTextMock).toHaveBeenCalledWith(text);
  expect(consoleErrorMock).toHaveBeenCalledWith('Failed to copy code: ', error.message);
  expect(alertMock).toHaveBeenCalledWith('Something went wrong with copying code to Clipboard');
});
