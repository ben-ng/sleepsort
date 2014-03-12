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

## Why?

[Sleepsort might be a joke](https://dis.4chan.org/read/prog/1295544154), but its implementation demonstrates three very important things about javascript: closures, asyncronous functions, and variable hoisting.

It is therefore an excellent example for a beginner to study to understand javascript better.

### The Naive Implementation

```js
function sleepsort (input) {
  for(var i=0; i<input.length; ++i) {
    setTimeout(function () {
      console.log(input[i]);
    }, input[i] * 1000);
  }
};

sleepsort([3,1,2]);
```

Output:
```$
undefined
undefined
undefined
```

What happened here? Why did we get three undefined elements?

If we modify the example a little bit, the reason is clear:

```js
function sleepsort (input) {
  for(var i=0; i<input.length; ++i) {
    setTimeout(function () {
      console.log(input[i]);
    }, input[i] * 1000);

    console.log('i is ' + i);
  }
};

sleepsort([3,1,2]);
```

Output:
```$
i is 0
i is 1
i is 2
undefined
undefined
undefined
```

The for loop kept running, incrementing the value of i. By the time the callback functions ran, the value of i was 3, which was out of bounds of the input array.

This demonstrates *closure*, which is the ability of a function to "remember" the scope it was created in, and access the variables in that scope.

### The Naive Fix

A beginner would likely try to fix the problem with this code:

```js
function sleepsort (input) {
  for(var i=0; i<input.length; ++i) {
    var j = i; // copy i into j.

    setTimeout(function () {
      console.log(input[j]);
    }, input[j] * 1000);
  }
};

sleepsort([3,1,2]);
```

Output:
```$
2
2
2
```

Why did we get three 2s this time? The reason is because of hoisting. All variable declarations in javascript are "hoisted" to the top of the scope they are in. Since only functions create new scopes in javascript, this means that our code was equivalent to this:

```js
function sleepsort (input) {
  var j;

  for(var i=0; i<input.length; ++i) {
    j = i; // copy i into j.

    setTimeout(function () {
      console.log(input[j]);
    }, input[j] * 1000);
  }
};

sleepsort([3,1,2]);
```

Unlike languages like Java and C, the for loop did not have its own scope. Thus, j was last assigned the value of 2 before the loop ended, and that was the element that was printed three times.

## The Real Fix

The real solution to this problem is to create a new scope. By wrapping our timeout code in an immediately invoked function expression (IIFE), we create a variable j in a new scope and assign it the current value of i. Since j is in a new scope, it is untouched by future iterations of the loop.

```js
function sleepsort (input) {
  for(var i=0; i<input.length; ++i) {
    (function (j) {
      setTimeout(function () {
        console.log(input[j]);
      }, input[j] * 1000);
    })(i);
  }
};

sleepsort([3,1,2]);
```

Output:
```$
1
2
3
```

## Optimization

While optimizing sleepsort is somewhat of a laughing matter, creating functions inside a loop is almost always a bad idea. The following code is equivalent and resolves this problem:

```js
function sleepsort (input) {

  function sort (j) {
    setTimeout(function () {
      console.log(input[j]);
    }, input[j] * 1000);
  };

  for(var i=0; i<input.length; ++i) {
    sort(i);
  }
};

sleepsort([3,1,2]);
```

I hope that helped your understanding of closure, asyncrony, and hoisting!

## Is this really O(n)?

No, it's actually using your operating system's insertion sort.

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
