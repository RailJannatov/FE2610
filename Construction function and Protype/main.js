// const person = {
//   name: "Ibrahim",
//   surname: "Memmedov",
//   age: 20,
// };

// const person2 = {
//   name: "Kenan",
//   surname: "Memmedov",
//   age: 23,
// };

// const person3 = {
//   name: "RAuf",
//   surname: "Ceferov",
//   age: 25,
// };

function Human(name, surname, age) {
  // if (!(this instanceof Human)) {
  //   return new Human(name, surname, age);
  // }
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.test = function () {
    console.log("test");
  };
}
Human.prototype.getFullName = function () {
  console.log("something");
};
Human.prototype.getBirthday = function () {
  return new Date().getFullYear() - this.age;
};
const person = new Human("Ibrahim", "Memmedov", 20);
const person2 = new Human("Kenan", "Memmedov", 23);

// console.log(person.getFullName);
console.log(person.test);
console.log(person2.test);

console.log("1", person.getFullName === person2.getFullName);
console.log("2", person.test === person2.test); // false

// Human.prototype.getFullName = function () {
//   return `This fullname ${this.name} and ${this.surname}`;
// };

// person.hasOwnProperty("age");

// console.log(person.getFullName());
// console.log(person.getBirthday());

// console.log("1", person);
// console.log("2", person2);

function Animal(weight, age, type) {
  this.weight = weight;
  this.age = age;
  this.type = type;
}

Animal.prototype.describe = function () {
  return `This describe animal ${this.age} ${this.type} ${this.weight}`;
};

Animal.prototype.breath = function () {
  return `Fssssss......`;
};

function Dog(bark, weight, age, type) {
  Animal.call(this, weight, age, type);
  this.bark = bark;
}

Dog.prototype = Object.create(Animal.prototype); //best way
Dog.prototype = new Animal(); // waste way
// Dog.prototype.constructor = Dog;

const jessy = new Dog(true, "10kg", 2, "Rotfiler");
console.log(jessy);

console.log(jessy.describe());
console.log(jessy.breath());
