// "use strict";

// // console.log("1", a);

// // var a = 10;

// // console.log("2", a);

// // var a = "20";

// // console.log("3", a);

// // console.log("4", b);

// // let b = null;

// // elovset = "elovset";

// // console.log("5", b);
// // console.log(elovset);

// // console.log("6", age);

// // const age = 20;

// // 10 20 null 20

// // Primitive type ve Reference type

// // number
// const number = 10;
// // string

// const student = "Sabi";
// // boolean

// const isStudent = true;
// const isMarried = false;

// // undefined

// let group;
// console.log(group);

// group = "FE2606";

// // null

// let car = null;

// // let students = ["test"];

// // symbol

// // BigInt

// // Reference type

// // Array

// // students = 124.241.24.52.52

// // let students = ["Sabi", "Elovset", "Nurlan", "Ramin"];

// // Object
// let test = {};
// // function
// let func = () => {};

// // Conditional Statements

// let age = 20;

// // let sum = !(age * 20 - 40 + "test");

// // if-deki condition true olarsa o zaman if block-una daxil olur

// // && and operator
// if (age > 18 && age < 21) {
//   console.log("you are teenager");
// } else if (age > 18) {
//   console.log("You are adult");
// } else {
//   console.log("You are child");
// }

// let firstNumber = 20;
// let secondNumber = 40;
// let thirdNumber = 20;

// let fourthNumber = "20";
// let fiveNumber = "40";

// // operators
// console.log("1", firstNumber > secondNumber);
// console.log("2", firstNumber < secondNumber);
// console.log("3", firstNumber >= thirdNumber);
// console.log("4", firstNumber <= thirdNumber);

// // console.log("5", firstNumber == secondNumber); check if value is same

// console.log("6", firstNumber == fourthNumber);
// console.log("7", fiveNumber == thirdNumber);

// // console.log("8", firstNumber === fourthNumber);   check if value and type is same

// console.log("9", firstNumber != thirdNumber);

// console.log("10", firstNumber != fourthNumber);
// console.log("11", secondNumber != thirdNumber);

// console.log("12", firstNumber !== fiveNumber);
// console.log("13", firstNumber !== fourthNumber);

// // or operator

// let something = 0;

// // Convert to falsy values

// // 0,null,undefined,"",NaN

// console.log("14", firstNumber || secondNumber);

// console.log("15", null || something);

// // console.log("16", something ?? 505);  if left hand is null or undefined then return right hand
// console.log("16", something ?? 505);

// console.log("17", undefined ?? secondNumber);

// console.log("18", null ?? 20);

// console.log("19", "" ?? 60);
// // Logical operator if left hand is falsy return right hand

// // and operator

// console.log("20", null && 40);

// console.log("21", 4 && 56);

// console.log("22", null && undefined);

// console.log("23", 0 && 40);

// console.log("24", "" || (40 && 0));
// console.log("24", "" && 40 && 0);
// // "" || 0

// Function

// DRY Dont repeat yourself

// let sumAnother = a + b;
// a ve b parametrlerdi

// function anotherSum() {
//   let a = -4;
//   let b = 16;
//   let sum = a + b;
//   return sum;
// }

// console.log(sum);

// console.log(sum);

// console.log(sum(5, 10));
// console.log(sum(-4, 16));

// console.log(sum(20, 30));

// function sum(a, b) {
//   console.log("a yazilib", a);
//   console.log("b yazilib", b);
//   let sum = a + b;
//   return sum;
// }
// console.log(sum);

// const sum = function (a, b) {
//   return a + b;
// };

var car = "BMW";

let name = "Dashgin";

function changeCar() {
  var car = "Audi";
  var test = "test";
  let name = "Cihan";
  // console.log(car);
  // console.log(name);
}

function saySomething(name) {
  return `salam ${name}`;
}

function calculate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "/") {
    return firstNumber / secondNumber;
  } else if (operator === "*") {
    return firstNumber * secondNumber;
  } else {
    alert("It is not operator");
  }
}

// console.log(calculate(20, 0, "/"));

// console.log(saySomething("Dilruba"));

// let arrowFunction = () => {};
// named function declaration

// let helloToUser = function () {};

// changeCar();
// console.log(car);

// function sum(a, b) {
//   let sum = a + b + 5;
//   return sum;
// }
// console.log(sum());

// function car(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

const cars = [
  {
    name: "BMW",
    color: "Red",
    price: 30000,
    engine: "V10",
  },
];

// employees.push(5);
// employees.push("test");
// employees.unshift({ name: "Dashgin" });
// employees.shift();
// employees.pop();
// console.log(employees);
const employees = [
  { name: "Ibrahim", position: "Manager", age: 21 },
  { name: "Eli", position: "Frontend", age: 20 },
  { name: "Qiyas", position: "Developer", age: 22 },
  { name: "Elovset", position: "Developer", age: 23 },
];

// const filteredEmployeee = employees.filter((item) => item.age % 2 === 0);

// function customFilter(array, func) {
//   let filteredArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (func(array[i])) {
//       filteredArray.push(array[i]);
//     }
//   }
//   return filteredArray;
// }

// console.log(customFilter(employees, (item) => item.age === 20));

// console.log(filteredEmployeee);

// employees.forEach((item) => {
//   if (item.age === 20) {
//     console.log(item);
//   }
// });

// function showEmployeeAge(elikram) {
//   console.log(elikram);
// }

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].age === 20) {
//     return;
//   }
//   console.log(employees[i]);
// }

// employees.forEach((employee) => {
//   // if (employee.age === 20) {
//   //   return;
//   // }
//   // console.log(employee.age);
// });

// showEmployeeAge();

// const test = function () {};

// const employee = {
//   forEach: function () {
//     console.log("foreach");
//   },
// };

// employee.forEach();

// function something() {}

// var somethingAnother = () => {};

// const mappedArray = employees.map((item) => {
//   if (item.name === "Eli") {
//     item.age = item.age + 1;
//     return item;
//   }
// });

// console.log(mappedArray);

const object = {
  name: "Eli",
};

console.log(name in object);
