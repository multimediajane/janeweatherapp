let now = new Date();

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[now.getMonth()];

let todayDate = document.querySelector(".todayDate");

todayDate.innerHTML = ` ${day},  ${date}/${month}/${year} ${hour}:${minutes} `;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
