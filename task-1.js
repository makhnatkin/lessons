'use strict';

// const users = []; // undefined

// const users = [{
//     name: 'Вася',
//     id: 'dfgsdg-sdfgdfg-dfg'
// }, {
//     name: 'Петя',
//     id: 'sdfgdfg-dfg-dfgsdg'
// }];

// try {
//     console.log(users[0].name); // ?
// } catch(error) {
//     console.warn('+++', error); // ?
// }

// console.log(users[0]?.name);

// if (typeof users[0] === 'object') {
//     console.log(users[0].name);
// }

// if (users[0] !== undefined) {
//     console.log(users[0].name);
// }

// if (users[0]) {
//     console.log(users[0].name);
// }

// if (!!users[0]) {
//     console.log(users[0].name);
// }


// undefined
// VM81:1 Uncaught TypeError: Cannot read properties of undefined (reading 'name')


// // 4 способа
//
// // 1
// function sum(a, b) {
//     return a + b;
// }
//
// console.log(sum(1,2)); // ?
//
// // 2
// let sum1 = function (a, b) {
//     // this
//     return a + b;
// }
//
// // 2.1
// const sum21 = function f (a, b) {
//     f();
//     return a + b;
// }
//
// // 3
// const sum3 = (a, b) => {
//     const c = a + b
//     return c;
// }
//
// const sum4 = (a, b) => a + b;
//
//
// //
//
// F();
//
// function F() {
//     return true;
// }
//
// v
// const F2 = () => {
//     return true;
// }
// F2()
//
//
//
// var F3 = function () {
//     return true;
// }
//
// const x = [];
// x.map(
//
// )


// ====



// const f = function() {
//     return true;
//     // sdfsdf
// };
//
// console.log(f());




// const c = a.plus(b);
// const sum = (a, b) => {
// }



// const double = (a) => {
//     return 2 * a
// }
//
// Math.random();

// const DEFAULT = Math.random();
//
// const sum = (a = DEFAULT, b = DEFAULT) => {
//     return a + b; // undefined + undefined // 0
// };


// console.log(sum()); // ?

// const logSum = (a, b) => {
//     if (a === undefined && b === undefined) {
//         return 0;
//     }
//
//     console.log(sum(a, b))
// };
//
// const x = logSum(1, 2)



// const plus1 = a => a + 1;
//
// const y = Math.floor(Math.random() * 3);
//
// // 2 20
// const multiply123 = (b, c) => {
//     const x = plus1(c);
//     return b * x;
// }
//
//
//
// console.log(multiply123(y));

const sum = ({ a, b }) => {
    return a + b;
}





