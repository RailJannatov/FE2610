const company = {
  name: "Turing",
  location: "Icherisheher",
  capacity: 200,
  employees: ["Rail", "Nurlan", "Ramin", "Ruslan", "Rufat"],
  getFullDetailInfo: function () {
    console.log(
      `this is company detail and name: ${this} ${this.name} location:${this.location} capacity:${this.capacity} employees:${this.employees}`
    );
  },
  getEmployees: () => {
    console.log("inside get Employee", this);
  },

  getCapacity: function () {
    return () => {
      console.log(this.capacity);
    };
  },
};

function test() {
  console.log(this);
}
test();

// [].map()
// let name = function () {};

// company.getFullDetailInfo();

company.getEmployees();

company.getCapacity()();

// name.test = " test";

Array.prototype.customFilter = function (callback) {
  let result = [];
  console.log(this.length);
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, 3, 4, 5, 6].customFilter((num) => num > 3));

// let saySomething = function(name){
// console.log(name)
// }
// saySomething('test')

Array.prototype.customFilter2 = () => {
  console.log("arrow ile", this);
};

// [2, 4, 6].customFilter(num=>num );
// [2,4,6].filter(num=>num )
// [2, 4, 6].customFilter2();

// console.log(window);

let employee = {
  name: "test",
};

employee.psotion = "developer";
