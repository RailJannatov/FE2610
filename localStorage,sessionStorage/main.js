let theme = "light";
let count = 1;

let user = {
  name: "kamal",
  surname: "test",
};

document.getElementById("btn").onclick = function () {
  if (count % 2 === 0) {
    localStorage.setItem("theme", theme);
    localStorage.setItem("lang", "az");
    localStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("expiredToken", "somertinh");
    sessionStorage.setItem("expiredToken2", "somertinh");
  } else {
    localStorage.setItem("theme", "dark");
    localStorage.setItem("lang", "en");
  }
  count++;
};

document.getElementById("clearBtn").onclick = function () {
  //   localStorage.removeItem("lang");
  //   localStorage.clear();

  console.log(JSON.parse(localStorage.getItem("user")));
  console.log(sessionStorage.getItem("expiredToken"));
  //   console.log(sessionStorage.clear());
  console.log(sessionStorage.removeItem("expiredToken2"));
};
