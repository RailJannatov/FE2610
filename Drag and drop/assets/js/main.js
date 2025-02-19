const draggableBoxs = document.querySelectorAll(".draggableBox");
const dropBox = document.querySelector(".dropBox");

draggableBoxs.forEach((element) => {
  element.ondragstart = function (event) {
    const id = this.getAttribute("id");
    event.dataTransfer.setData("id", id);
  };
});

// draggableBox.onclick = function () {
//   console.log("test");
// };

// let element = {};

// dropBox.ondragover = (event) => event.preventDefault();
// dropBox.ondragover = function () {};

// dropBox.addEventListener("dropover", function () {});

// draggableBoxs.ondragstart = function (event) {
//   const id = this.getAttribute("id");
//   event.dataTransfer.setData("id", id);
//   //   console.log(event);
//   //   console.log(this);
//   //   element = this;
// };

// draggableBox.ondragend = function () {
//   console.log("drag end");
// };

// dropBox.ondrop = function (event) {
//   const id = event.dataTransfer.getData("id");
//   const element = document.getElementById(id);
//   this.appendChild(element);
//   //   this.appendChild(element);
// };

// dropBox.onclick = function () {
//   alert("1");
// };

// dropBox.onclick = function () {
//   alert("2");
// };

// dropBox.onclick = function () {
//   alert("3");
// };

// dropBox.onclick = function () {
//   alert("4");
// };

// dropBox.addEventListener("click", function () {
//   alert("5");
// });
// dropBox.addEventListener("click", function () {
//   alert("6");
// });
// dropBox.addEventListener("click", function () {
//   alert("7");
// });
// dropBox.addEventListener("click", function () {
//   alert("8");
// });

let human = {
  name: "Rail",
  surname: "Jannatov",
  getFullName: function () {
    console.log(this);
  },
};

human.surname = "Memmedov";
human.surname = "Esgerob";

human.getFullName = function () {
  console.log(this.name);
};

console.log(human.getFullName());
