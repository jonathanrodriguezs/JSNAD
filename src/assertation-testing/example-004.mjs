/* eslint-disable no-new-wrappers */
// Assertion testing

import { strict as assert } from 'assert';

try {
  //* assert.deepStrictEqual(actual, expected[, message])
  // When the third parameter "message" is an instance of Error is thrown instead AssertionError

  assert.deepStrictEqual({ a: 1 }, { a: 1 }); // true, same structure and values
  assert.deepStrictEqual(NaN, NaN); // true, because SameValue comparison
  assert.deepStrictEqual(Number(2), Number(2)); // true, same type and value
  assert.deepStrictEqual(new String('foo'), Object('foo')); // true, identical when unwrapped
  assert.deepStrictEqual(-0, 0, new Error('Different zeros')); // false, SameValue Comparison

  //* assert.doesNotMatch(string, regexp[, message])
  // Experimental, stability 1, added in v13.6.0, v12.16.0

  assert.doesNotMatch('I will fail', /fail/); // false, string match the regexp
  assert.doesNotMatch(123, /exit/); // false, not string value
  assert.doesNotMatch('I will succed', /fail/);
} catch (error) {
  console.log(error);
}
