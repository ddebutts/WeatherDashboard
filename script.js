//On page load find last city and load it. If none then do nothing

 
 var city = ""

//user enters city and clicks "Get It"... Make sure not null and call getCurrentWeather function
 $("button").on("click", function(){
    city = $(".form-control").val()
    console.log(city)
     getCurrentWeather();
    });


function getCurrentWeather(city){
    console.log("inside getCurrentWeather function")
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=city}`
  
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log(response)

      });
  };

    console.log(city);

        
