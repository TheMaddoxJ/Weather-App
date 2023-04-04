// LOCAL STORAGE ATTEMPT //
var searchedCity = [''];

document.getElementById('saveBtn').addEventListener('click', function(){
  window.localStorage.searchedCity.setItem();
  updateUI();
})

// below are the things needed to display according to the api documentation. Just don't know how to implement them into the code yet. //
// { city } = data;
// { icon, description } = data.requestUrl[0];
// { temp, humidity } = data.main;
// { speed } = data.wind;

function getWeather(city) {
  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9bc300aac32b53e35d0e6a8f7024391b"
  fetch(requestUrl)
  .then(function (response) {

    return response.json();
  })

  // RENDER CURRENT (DATA) //
  .then(function (data) {
    document.querySelector('.city').textContent=city;
    document.querySelector('.temp').textContent="Temperature: " + data.main.temp + "°F";
    document.querySelector('.humidity').textContent="Humidity: " + data.main.humidity + "%";
    document.querySelector('.wind').textContent=data.main.wind+"MPH";
    document.querySelector('.icon').textContent=data.weather.icon;

    console.log('Fetch Response \n-------------');
    console.log(data.main.humidity);
    console.log(data.main.temp)
    console.log(data.wind.speed)
  });

}

// FETCH FOR THE API AND RETURN THE RESPONSE WITH JSON //
function getCity(event) {
  event.preventDefault();
var searchInput = document.querySelector('.search-bar').value
getWeather (searchInput);
}
document.getElementById('saveBtn').addEventListener('click', getCity);



// CURRENT DATE AND TIME //
var currentDay = document.querySelector('#currentDay');
var output = document.querySelector('#currentDay');

let today = new Date();

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

let current_date = '${month}/${date}/${year}';
output.innerText = current_date;

let hours = addZero(today.getHours());
let minutes = addZero(today.getMinutes());
let seconds = addZero(today.getSeconds());

let current_time = '${hours}:${minutes}:${seconds}';
output.innerText = current_time;

document.getElementById("currentDay").innerHTML = today;

function addZero(num){
  return num < 10 ? '0${num}':num;
}