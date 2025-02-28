// setTimeout(() => {
//   console.log("Task is done");
// }, 2000);

// function orderFood(callback) {
//   setTimeout(() => {
//     console.log("Order placed");
//     callback();
//   }, 4000);
// }

// function prepareFood(callback) {
//   setTimeout(() => {
//     console.log("prepare food");
//     callback();
//   }, 2000);
// }

// function sendingFood() {
//   setTimeout(() => {
//     console.log("sending food");
//   }, 1000);
// }

function getOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched data");
      resolve();
    }, 4000);
  });
}

function prepareFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("prepare data");
      resolve();
    }, 2000);
  });
}

function sendFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("send data");
      resolve("completed");
    }, 1000);
  });
}

// fetch("")
//   .then((data) => data.json())
//   .then((data) => console.log(data));

// orderFood(() => prepareFood(() => sendingFood()));

// getOrder(1)
//   .then(prepareFood)
//   .catch((err) => console.log(err))
//   .then(sendFood)
//   .then(console.log)
//   .finally(() => console.log("finally its happening"));

// Microtask,macrotask ,callstack

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);
// Macro Task queue

new Promise((resolve) => {
  resolve("completed");
});

// Micro Task queue

console.log("3");
