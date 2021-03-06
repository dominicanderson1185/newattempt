const ap = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=83276,us&units=imperial&appid=48f43db2ed0d5510dff2f687f798aa62'
 

    fetch(ap)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);



    document.getElementById('curtemp').textContent = Math.round(jsonObject.main.temp);
    document.getElementById('tempe').textContent = Math.round(jsonObject.main.temp_max);
    document.getElementById('humid').textContent = Math.round(jsonObject.main.humidity);
    document.getElementById('windSpeed').textContent = Math.round(jsonObject.wind.speed);

 
  

const temp = document.getElementById('curtemp').textContent;
const wind = document.getElementById('windSpeed').textContent;

var t = parseFloat(temp);
var s = parseFloat(wind);

var windChill;

if (t > 50 || s < 0) {
    windChill = "N/A"
    document.getElementById('windChill').innerHTML = windChill;
}
else {
    windChill = ((35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16))*10)/10;
    windChill = Math.round(windChill);
    document.getElementById('windChill').innerHTML = windChill;
}


    

});
