# SleepSort.js

[![Build Status](https://travis-ci.org/ben-ng/sleepsort.png?branch=master)](https://travis-ci.org/ben-ng/sleepsort)

## Usage
```js
var sleepsort = require('./index.js')
  , assert = require('assert');

sleepsort([1,3,2], function (result) {
  assert.deepEqual(result, [1, 2, 3]);
});
```

# Why

This [accompanies my blog post](http://www.benng.me/sleepsort-js) intended to help beginners to javascript learn about closures, asynchronous functions, and variable hoisting.

# License

The MIT License (MIT)

Copyright (c) 2014 Ben Ng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
