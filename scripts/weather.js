navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long +           '&appid=9aac11d6883f57e0096c94c71fa06cf4').then(response => {
      return response.json()
      })
    .then(data => {
      console.log(data)
    document.getElementById('temperature').innerHTML = Math.ceil((data.main.temp-273.15) * 9/5 + 32);
      console.log(data.weather[0].id);
      switch ( data.weather[0].id) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232: 
          console.log("thunderstorm");
          break;
        
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
          console.log("drizzle rain");
          break;
          
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531: 
          console.log("rain");
          break;
          
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
          console.log("snow");
          break;
          
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781: 
          console.log("atmosphere");
          break;      
          
        case 800:
          console.log("clear skies");
          document.getElementById("weather_icon").setAttribute("src","resources/weather_icons/sunny.svg");
          break;
        case 801:
        case 802:
        case 803:
        case 804:
          console.log("cloudy");
          document.getElementById("weather_icon").setAttribute("src","resources/weather_icons/cloudy.svg");
          break; 
      }
    });
  });