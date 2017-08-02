var apiKey = require('./../.env').apiKey
// var Faren = require('./../js/temperature.js').farenModule;

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.showKelvin').text("The temperature in " + city + " is " + response.main.temp + "degrees Kelvin");
      $('.showCel').text("The temperature in " + city + " is " + ((response.main.temp) - 273) + "degrees Kelvin");
      $('.showFahr').text("The temperature in " + city + " is " + ((response.main.temp) * (9/5) - 459.67) + "degrees fahrenheit");
    });
  });
});
