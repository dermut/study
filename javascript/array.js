'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple🍎', 'banana🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
for(let fruit of fruits) {
    console.log(fruit);
}

console.clear();
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('starwberry🍓', 'peach🍑');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('lemon🍋', 'orange🍊');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('pineapple🍍', 'cherry🍒');
console.log(fruits);
fruits.splice(1, 1, 'watermelon🍉', 'persimmon🍅');
console.log(fruits);

// combine two arrays
const fruits2 = ['🥭', '🌽'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);

// indexOf
console.log(fruits.indexOf('apple🍎'));
console.log(fruits.indexOf('persimmon🍅'));
console.log(fruits.indexOf('🍙'));

// includes
console.log(fruits.includes('🍙'));

// lastIndexOf
console.clear();
fruits.push('apple🍎');
console.log(fruits);
console.log(fruits.indexOf('apple🍎'));
console.log(fruits.lastIndexOf('apple🍎'));

