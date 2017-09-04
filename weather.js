window.onload = myFunction;
var some;
function myFunction() {
  navigator.geolocation.getCurrentPosition(function(pos) {
    var latitude =  pos.coords.latitude.toFixed(1);
    var longitude = pos.coords.longitude.toFixed(1);
        
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lon=' + longitude + '&lat=' + latitude, false );
    xhr.send();
    some = JSON.parse( xhr.responseText); //getting string with weather
   
    var city =  document.querySelector('.city'); //city name
    city.innerHTML = some.name;                 

    var temperature =  document.querySelector('.temperature');
    temperature.innerHTML = some.main.temp.toFixed(1);

    var icon =  document.querySelector('.icon');
    icon.style.backgroundImage = 'url(' +  some.weather[0].icon +  ')';    // weather icon             
  });    
} 
// degree's switcher   
var b =  document.getElementsByName('toggle');
b[0].addEventListener('click', toggleTemperature)

function toggleTemperature(){  
  //catch span with degree's standart letter
  var tempStandart =  document.querySelector('.standart');
  var temperature =  document.querySelector('.temperature');
  if(tempStandart.innerHTML == 'F') {
    tempStandart.innerHTML = 'C';
    temperature.innerHTML = some.main.temp.toFixed(1);  // temp check
  }
  else if(tempStandart.innerHTML == 'C') {
    tempStandart.innerHTML = 'F';
    
    temperature.innerHTML =  ( some.main.temp * 1.8 + 32 ).toFixed(1) ;     
  }
}
/*
User Story: I can see the weather in my current location.
User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
User Story: I can push a button to toggle between Fahrenheit and Celsius.
*/