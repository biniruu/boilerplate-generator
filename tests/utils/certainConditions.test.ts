import { objOptions } from '@data/options';
import getCertainConditions from '@utils/certainConditions';

test('should convert received options from a parameter to conditions', () => {
  const conditions = {
    hasAxios: false,
    hasNextAuth: false,
    hasTanstackQuery: false,
    hasTypescript: false,
    hasTsExtension: false,
  };
  const result = getCertainConditions(objOptions);

  expect(result).toMatchObject(conditions);
});
