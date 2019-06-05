const clear = document.querySelector(".clear");

/*let addTodo = function (toDo) {

} poista jos hyödytön*/

// get current date and time
let getTime = function() {
  let date = new Date();

  let getDateDiv = document.getElementById("date");
  getDateDiv.innerHTML = date;

  setTimeout(getTime, 1000); // updates every second with setTimeout
}

let addToList = function() {

const list = document.getElementById("list");
const input = document.getElementById("input");

let newListItem = "<li>moi</li>";

list.insertAdjacentHTML(beforeend, newListItem);

}

getTime();
