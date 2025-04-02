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

let surname: string = "Eflatun";

// let s;

let age: number | string = 10;
// age = "10";

let isStudent: boolean = true;

let weekDay: "Monday" | "Friday" = "Monday";

// let month: 1 | 5 = 88;

let money: null = null;

let usd: undefined = undefined;

let numbers: number[] = [1, 2, 3, 4, 5];

let anotherNumbers: Array<number | string> = [1, 2, 3, 4, 5, "salam"];

let names: string[] = ["Eflatun", "Ali", "Veli"];

const getFullName = (name: string | undefined): void => {
  console.log(`${name}`);
};

getFullName("");

const getAge = (age: number): number | void => {
  if (age < 10) {
    console.log("test");
  } else {
    return age + 10;
  }
};

const getArrayWithNumbers = (...numbers: number[]): string[] => {
  return [`${numbers[0]}`];
};

const getSomething = (
  firstValue: string,
  secondValue?: number
): string | undefined => {
  if (typeof secondValue === "string") return secondValue;
  return undefined;
};

// let loggedInUsername: string;

// const users = [
//   { name: "Oby", age: 12 },
//   { name: "Heera", age: 32 },
// ];

// const loggedInUser = users.find((u) => u.name === loggedInUsername);
// console.log(loggedInUser.age);

// let test: any = "test";

// type Course = {
//   name: string;
//   capacity: number;
//   isOnline: boolean;
//   students?: any[];
// };

interface ICourse {
  name: string;
  capacity: number;
  isOnline: boolean;
  students?: any[];
}

// type TNumber = string;
// let number: TNumber = "10";

const course: ICourse = {
  name: "turing",
  capacity: 20,
  isOnline: true,
  // students: ["Eflatun", "Ali", "Veli", 5, null, undefined],
};

type TSertification = {
  name: string;
  sertificateData: [string, number];
};

//Tuple

const sertification: TSertification = {
  name: "AIL",
  sertificateData: ["4214j24jj2442", 78],
};

type TAudioSystem = {
  brand: string;
  power: number;
};

type Car = {
  engine: string;
  seat: number;
  color: string;
  isAutomatic: boolean;
  audioSystem?: TAudioSystem;
};

const car: Car = {
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
