// Experimental feature in Node 14
// Call tracker for function invocations

import assert, { CallTracker, AssertionError } from 'assert';

let calls = 0;

const tracker = new CallTracker();

function tracked() {
  calls += 1;
}

const callsfunc = tracker.calls(tracked, 1);

callsfunc();
callsfunc();
callsfunc();
callsfunc();

process.on('exit', () => {
  try {
    tracker.verify();
  } catch (error) {
    assert(error instanceof AssertionError);
    assert.strictEqual(calls, error['actual 0']);
  }
});
