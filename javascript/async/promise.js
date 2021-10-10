'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executer runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('jimin');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
// then: promise가 잘 실행이 되고 나서 resolve 되어 value 값이 들어옴.
// catch: reject 에러가 발생하였을 때 catch 해주는 역할
// finally: 어떤 경우에도 마지막으로 발생.
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally')
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)) , 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`) , 1000);
    });


// 한 개의 파라미터를 계속 주고 받을 때에는 arrow function과 function value 입력 없이 이렇게 쓸 수 있다.
getHen() //
.then(getEgg)
.then(cook)
.then(console.log)
.catch(console.log);