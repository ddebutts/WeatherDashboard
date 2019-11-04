//On page load find last city and load it. If none then do nothing
const apiKey = "&appid=b09dfd022376d0e4f9f8dc6fa7680e01";


var city = ""

//user enters city and clicks "Get It"... Make sure not null and call getCurrentWeather function
$("button").on("click", function () {
  city = $(".form-control").val()
  console.log(city)
  getCurrentWeather(city);
});


function getCurrentWeather(city) {
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}${apiKey}`

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (results) {
      console.log(results)
      var parent = $("#main-card");

      var dataObj = {
        location: results.name,
        temp: ConvKelvinFahrenheit(results.main.temp).toFixed(1) + " °F",
        humid: results.main.humidity + "%",
        wind: results.wind.speed + "mph"
      }

      var mainCardHtml = MainCard(dataObj)

      parent.html(mainCardHtml)
    });
};

function ConvKelvinFahrenheit(temp) {
  return (temp - 273.15) * 9 / 5 + 32
}
// var data = dataObj
function MainCard(data) {
  return `<h3>${data.location}</h3>
  <table>
      <tr>
          <td>Temp: </td>
          <td>${data.temp}</td>
      </tr>
      <tr>
          <td>Humidiy: </td>
          <td>${data.humid}</td>
      </tr>
      <tr>
          <td>Wind Sped: </td>
          <td>${data.wind}</td>
      </tr>
  </table>`
}