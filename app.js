// const adder = (a, b) => {
//   return a + b
// }

// console.log(adder(5, 7))

// console.log(process.argv[2])
// process.exit()

// const names = ['John', 'Jane', 'Jack', 'James']

// const [, jane] = names

// console.log(jane)

// const [john, , jack] = names

// console.log(john, jack)

// const [, , message, message1] = process.argv

// console.log(message, message1)

// const adder = (a, b) => {
//   return a + b
// }

// const subtracter = (a, b) => {
//   return a - b
// }

// const multiplier = (a, b) => {
//   return a * b
// }

// const divider = (a, b) => {
//   return a / b
// }

// const exponent = (a, b) => {
//   return a ** b
// }

// let [, , operation, num1, num2] = process.argv

// num1 = parseInt(num1)
// num2 = parseInt(num2)

// switch (operation) {
//   case 'add':
//     console.log(adder(num1, num2))
//     break
//   case 'subtract':
//     console.log(subtracter(num1, num2))
//     break
//   case 'multiply':
//     console.log(multiplier(num1, num2))
//     break
//   case 'divide':
//     console.log(divider(num1, num2))
//     break
//   case 'exponent':
//     console.log(exponent(num1, num2))
//     break
// }

const movies = require('./movies.js')[0]

console.log(movies)
