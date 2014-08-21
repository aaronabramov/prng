### Seedable pseudo random number generator written in javascript
[![Build Status](https://travis-ci.org/dmitriiabramov/prng.svg?branch=master)](https://travis-ci.org/dmitriiabramov/prng)
```javascript
var PRNG = require('prng'),
    prng = new PRNG(123456789);

prng.rand(9) // => random number in a range from 0 to 9
prng.rand(10, 100) // => random number in a range from 10 to 100
prng.rand(-1000, -700) // => random number in a range from -1000 to -700

prng = new PRNG(); // use default seed
prng.rand(5555) // => 930
```
