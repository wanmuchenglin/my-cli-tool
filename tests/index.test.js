const test = require('node:test');
const assert = require('node:assert');
const { run } = require('../src/index');

test('run prints greeting with default name', () => {
  const logs = [];
  const originalLog = console.log;
  console.log = (msg) => logs.push(msg);
  run([]);
  console.log = originalLog;
  assert.deepStrictEqual(logs, ['Hello, World!']);
});
