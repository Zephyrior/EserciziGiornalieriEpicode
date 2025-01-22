class User {
  constructor(_firstName, _lastName) {
    this.firstName = _firstName;
    this.lastName = _lastName;
  }
}

let userList = [];

const userForm = document.getElementById("userForm");

userForm.onsubmit = function (event) {
  event.preventDefault();

  const { firstName, lastName } = event.target.elements;

  const newUser = new User(firstName.value, lastName.value);

  makeList(newUser);

  userList.push(newUser);

  localStorage.setItem("userList", JSON.stringify(userList));
  
  firstName.value ="";
  lastName.value="";
};

const makeList = function (obj) {
  const header = document.getElementById("header")
    if (localStorage.getItem("userList") && !document.getElementById("userListHeader")) {
        const headerList = document.createElement("h1");
        headerList.id = "userListHeader"
        headerList.innerText = "User List:";
        header.appendChild(headerList);
    };

  const listContainer = document.getElementById("userList");
  const newUserList = document.createElement("li");
  newUserList.innerHTML = `${obj.firstName} ${obj.lastName}`;

  listContainer.appendChild(newUserList);
};

//console.log((localStorage.getItem(userList)));

window.addEventListener("DOMContentLoaded", function () {
  const userListFromStorage = localStorage.getItem("userList");

  if (userListFromStorage) {
    userList = JSON.parse(userListFromStorage);

    userList.forEach((userObj) => makeList(userObj));
  }
});

const delButton = document.getElementById("deleteButton");

/*delButton.addEventListener("click", function () {
  const userListFromStorage = JSON.parse(localStorage.getItem("userList"));
  //localStorage.removeItem(userListFromStorage[userList.length]);
  //let i = localStorage.length;
  //localStorage.removeItem(userList[i])
  userListFromStorage.splice(-1, 1);
  localStorage.setItem("userList", JSON.stringify(userListFromStorage));
  location.reload();
});*/

delButton.addEventListener("click", function () {
    if (userList.length > 0) {
        userList.pop();
        localStorage.setItem("userList", JSON.stringify(userList));
        const listContainer = document.getElementById("userList");
        listContainer.innerHTML ="";
        userList.forEach((userObj) => makeList(userObj));
    }
});

window.addEventListener("DOMContentLoaded", function () {});

let counter = sessionStorage.getItem("counter") || 0;
let counterText = document.getElementById("counterText");
counterText.innerText = counter;

setInterval(function () {
  counter++;
  sessionStorage.setItem("counter", counter);
  counterText.innerText = counter;
}, 1000);
