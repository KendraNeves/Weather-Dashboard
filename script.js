$(document).ready(function() {


let city = "baltimore";


    function getWeather(){

        //Weather.com API call
        let weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=8a9c8778f33ed43d7abdebc8755bbe26`;
            
        $.ajax({
            url: weatherURL,
            method: "GET"
        })
            .then(function(response){
             $(".city").text(city + " " + moment().format('l'));
             $("<img>").appendTo(".city").attr("src", `http://openweathermap.org/img/w/${response.list[0].weather[0].icon}.png`) //ICON
             $(".temp").text("Temperature: " + response.list[0].main.temp + " °F");
             $(".humidity").text("Humidity: " + response.list[0].main.humidity);
             $(".wind").text("Wind Speed: " + response.list[0].wind.speed);
             $(".uvIndex").text();





             
                console.log(response);
            });


    }

    getWeather()

});