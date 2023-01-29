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
