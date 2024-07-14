import capitaliseFirstLetter from '@utils/capitaliseFirstLetter'

describe('Capitalise a first letter in a word', () => {
  test('should make a first letter capital in a word', () => {
    const result = capitaliseFirstLetter('axios')

    expect(result).toBe('Axios')
  })
})
