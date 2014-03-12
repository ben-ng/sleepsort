var sleepsort = require('./index.js')
  , assert = require('assert');

sleepsort([1,3,2], function (result) {
  try {
    assert.deepEqual(result, [1, 2, 3]);
  }
  catch(e) {
    console.log(e.message);
    console.log(e.stack);
    process.exit(1);
  }

  console.log('It works.');
  process.exit(0);
});
