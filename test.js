var sleepsort = require('./index.js')
  , assert = require('assert');

sleepsort([1,3,2], function (result) {
  assert.deepEqual(result, [1, 2, 3]);
  console.log('It works.');
});
