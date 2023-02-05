function updateTime() {
  //London Time
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment();
    londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  //Sydney Time
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  //New York Time
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#citiesTwo");
  citiesElement.innerHTML = `
  <div class="city"> 
  <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "HH:mm:ss"
          )} <small>${cityTime.format("A")}
        </div>
        </div>
      <a href="/" class="linktwo"> All Cities </a>
  `;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
