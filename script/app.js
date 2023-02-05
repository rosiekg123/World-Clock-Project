function showSelectedCity(event) {
  if (event.target.value === "paris") {
    alert(`It is ${parisTimeformatted}in Paris`);
  }
  if (event.target.value === "tokyo") {
    alert(`It is ${tokyoTimeformatted}in Tokyo`);
  }
  if (event.target.value === "sydney") {
    alert(`It is ${sydneyTimeformatted}in Sydney`);
  }
}
let sydneyTimeformatted = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM Do, YYYY HH:mm ");

let tokyoTimeformatted = moment()
  .tz("Asia/Tokyo")
  .format("dddd, MMMM Do, YYYY HH:mm ");

let parisTimeformatted = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM Do, YYYY HH:mm ");

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);

function updateTime() {
  //London Time
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment();
  londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do, YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //Sydney Time
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //New York Time
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
