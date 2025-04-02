"use strict";
// var age = 20;
// var surname = "surname";
// function test() {
//   if (age < 20) {
//     var age = 21;
//   }
//   var surname = "test";
//   console.log("1", surname);
// }
// console.log("2", surname);
// test();
// const thing = {
//   name: "thing",
//   age: 20,
// };
// thing.test = "test";
// console.log(thing);
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: {
//     k: 1,
//     j: 2,
//   },
// };
// const tet = "s";
// const shallowObj = { ...obj };
// const deepCopy = structuredClone(obj);
// shallowObj.d.k = 3;
// deepCopy.d.j = 4;
// console.log(obj);
// obj.d = "test";
// let d = 4;
// let { d } = obj;
// d = "test";
// let {
//   d: { j: rr },
// } = obj;
// console.log(j);
let surname = "Eflatun";
// let s;
let age = 10;
// age = "10";
let isStudent = true;
let weekDay = "Monday";
// let month: 1 | 5 = 88;
let money = null;
let usd = undefined;
let numbers = [1, 2, 3, 4, 5];
let anotherNumbers = [1, 2, 3, 4, 5, "salam"];
let names = ["Eflatun", "Ali", "Veli"];
const getFullName = (name) => {
  console.log(`${name}`);
};
getFullName("");
const getAge = (age) => {
  if (age < 10) {
    console.log("test");
  } else {
    return age + 10;
  }
};
const getArrayWithNumbers = (...numbers) => {
  return [`${numbers[0]}`];
};
const getSomething = (firstValue, secondValue) => {
  if (typeof secondValue === "string") return secondValue;
  return undefined;
};
// type TNumber = string;
// let number: TNumber = "10";
const course = {
  name: "turing",
  capacity: 20,
  isOnline: true,
  // students: ["Eflatun", "Ali", "Veli", 5, null, undefined],
};
//Tuple
const sertification = {
  name: "AIL",
  sertificateData: ["4214j24jj2442", 78],
};
const car = {
  engine: "V10",
  seat: 4,
  color: "red",
  isAutomatic: true,
  // audioSystem: {
  //   brand: "Bose",
  //   power: 1000,
  // },
};
// type func = (number: string) => number;
// const getSomething = (): void => {};
// function getTest() {}
// age = "10";
// surname = 4;
