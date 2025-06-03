// test.js
const human = {
  name: "test",
  surname: "test",
  age: 20,
  lesson: "test",
};

fetch("http://localhost:5000/student", {
  method: "POST",
  body: JSON.stringify(human),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log("1111", data))
  .catch((err) => console.error(err));
