import capitaliseFirstLetter from '@utils/capitaliseFirstLetter'

test('should make a first letter capital in a word', () => {
  const result = capitaliseFirstLetter('axios')

  expect(result).toBe('Axios')
})
