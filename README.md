# Roman Number Package

### Operate only on numbers between 1 to 3999

## Installation

`npm install deroman --save`

## Features

 * Convert a number from Roman to Integer or Integer to Roman.
 * Perform Arithmetic operations on Roman number like addition, subtraction, multiplication & addition.
 
## Synopsis

### Initialize the number with Roman string character

```js
var Deroman = require('deroman');
let r1 = new Deroman('IX');
console.log(r1.roman);
console.log(r1.decimal);
```

### Initialize the number with Integer number;

```js
var Deroman = require('deroman');
let r2 = new Deroman(50);
console.log(r2.roman);
console.log(r2.decimal);
```

## API Documentation

### Deroman

This contains a reference to the deroman module.

### Deroman.add(secondRoman)

* `secondRoman`: secondRoman can be either roman string, a roman object or a Javascript number.

### Deroman.sub(secondRoman)

 * `secondRoman`: secondRoman can be either roman string, a roman object or a Javascript number.

### Deroman.mul(secondRoman);

 * `secondRoman`: secondRoman can be either roman string, a roman object or a Javascript number.

### Deroman.div(secondRoman)

* `secondRoman`: secondRoman can be either roman string, a roman object or a Javascript number.
