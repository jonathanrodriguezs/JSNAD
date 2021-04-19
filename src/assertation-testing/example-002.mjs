// Customized AssertionErrror

import { strict as assert } from 'assert';

try {
  const x = 2;
  const y = 3;
  if (x !== y) {
    throw new assert.AssertionError({
      actual: x,
      expected: y,
      message: 'Not equal values',
      operator: 'strictEqual',
    });
  }
} catch (error) {
  console.log(error);
}
