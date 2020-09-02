let city = "St. Louis";

$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&APPID=4a841639610d6d4d9215be0f68f09679",
  function (data) {
    console.log(data);

    let icon =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let temp = Math.round(data.main.temp) + "°F";
    let weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $(".city").append(city);
    $(".temp").append(temp);
    $(".weather").append(weather);
  }
);
