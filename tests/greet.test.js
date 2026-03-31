const { test } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('../src/greet');

test('greet returns the correct greeting', () => {
  assert.equal(greet('Alice'), 'Hello, Alice! Welcome to Practice-GitHub-Workflows.');
});

test('greet works with different names', () => {
  assert.equal(greet('World'), 'Hello, World! Welcome to Practice-GitHub-Workflows.');
});

test('greet throws when name is empty string', () => {
  assert.throws(() => greet(''), { name: 'TypeError' });
});

test('greet throws when name is not a string', () => {
  assert.throws(() => greet(42), { name: 'TypeError' });
});

test('greet throws when called with no argument', () => {
  assert.throws(() => greet(), { name: 'TypeError' });
});
