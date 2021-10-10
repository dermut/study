// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// 1. Literals and properties
const name = 'ellie';
const age = 4;

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jimin = { name: 'jimin', age: 4 };
print(jimin);

// with JavaScript magic (dynamically typed language)
// can add properties later
// 절대 권장하는 방법이 아님.
jimin.hasJob = true;
console.log(jimin.hasJob);

// can delete properties later
delete jimin.hasJob;
console.log(jimin.hasJob);

// 2. Computed properties
// key should be always string
console.log(jimin.name);
console.log(jimin['name']);
jimin['hasJob'] = true;
console.log(jimin.hasJob);

// 이럴 경우에 .(dot)이 아니라 [](key)로 접근해야 함.
// key는 동적으로 사용될 때 주로 사용하며 일반적으로 코딩할 때는 dot을 사용하면 됨.
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(jimin, 'name');
printValue(jimin, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 }
const person2 = { name: 'steve', age: 3 }
const person3 = { name: 'dave', age: 4 }
const person4 = new Person('jimin', 28);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jimin);
console.log('age' in jimin);
console.log('random' in jimin);
console.log(jimin.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in jimin) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'jimin', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
// 아래와 같이 한 줄로 받아서 쓸 수도 있음.
// const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나오는 property가 앞의 Object를 override함.
console.log(mixed.color);
console.log(mixed.size);