import calcExpression, { sum, mult } from './calculator/index.js';
import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';
import './polyfills/array-flat.js';
import './polyfills/array-flatMap.js';

const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({ name: 'Tom', from: 'The World' });

// const store = (function () {
//   let storage = {};

//   return {
//     addItem: function (key, value) {
//       Object.assign(storage, { [key]: value });
//     },

//     clear: function () {
//       storage = {};
//     },
//   };
// })();

// Revealing module pattern

// (function func() {
//   const a = 17;
//   console.log(a);
// })();

// Immediately invoked function expression

// Asynchronous module definition + require.js - асинхронное добавление скрипта на страницу
