// Throw AssertionError and check properties on catch

import { strict as assert } from 'assert';

const actual = [[[1, 2, 3]], 4, 5];
const expected = [[[1, 2, 3]], 4, 5, 6];

try {
  assert.deepStrictEqual(actual, expected);
} catch (error) {
  assert(error instanceof assert.AssertionError);
  assert.strictEqual(error.name, 'AssertionError');
  assert.strictEqual(error.actual, actual);
  assert.strictEqual(error.expected, expected);
  assert.strictEqual(error.code, 'ERR_ASSERTION');
  assert.strictEqual(error.operator, 'deepStrictEqual');
  assert.strictEqual(error.generatedMessage, true);
}
