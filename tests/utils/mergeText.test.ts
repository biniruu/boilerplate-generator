import { mergeConfigs, mergeImports } from '@utils/mergeText'

let text: string[] = []

beforeEach(() => {
  text = ['🍎', '🍌', '', '🍉']
})

test('should merge imports with line-breaks', () => {
  expect(mergeImports(text)).toBe('🍎\n🍌\n🍉')
})

test('should merge configs with line-breaks and commas', () => {
  expect(mergeConfigs(text)).toBe('🍎,\n🍌,\n🍉')
})
