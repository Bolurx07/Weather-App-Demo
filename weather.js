let getMyLocation = () => {

    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(getWeatherApi)
    }
    
    else {
        alert("Sorry, your location in not responding")
    }

    
}

let keyApi = "715d8ee927e98787a523ae2107dc9286"

let basedUrl = "https://api.openweathermap.org/data/2.5/weather"


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

let getWeatherApi = (position) => {
    
    fetch (
        `${basedUrl}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${keyApi}`)
        
        .then((res) => res.json())
        .then((data) => {
                let para =  document.getElementById('para')
            para.innerText = JSON.stringify(data)
                let image = document.getElementById('img')
                let windy = document.getElementById('wind')
                let humidity = document.getElementById('humid')
                let country = document.getElementById('country')
                let city = document.getElementById('citty')
                let temp = document.getElementById('temp')

                image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
                windy.innerText = "Wind-speed : " + (data.wind.speed)
                humidity.innerText = "Humidity : " + (data.main.humidity)
                country.innerText = "Country : " + (data.sys.country)
                city.innerText = "City : " + (data.name)
                temp.innerText = "Temperature : " + (Math.floor(data.main.temp) - 273) + " ° C" 

                // date.innerText = "Date : " + new Date()
                //        let city = document.getElementById('citty')
                //        citty.innertext = "city: " + JSON.stringify(date.name)
                
                // let para =  document.getElementById('wind')
                // let city = document.getElementById('city')
                
                
                // wind.innertext = "wind: " + JSON.stringify(data.wind.speed)
        // name.innertext = "city: " + (date.name)
        
        // image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
        // 
    }
    )
    
    
    
}
getMyLocation()


    //     const date = new Date();
    //    const bbbb = document.getElementById('date');
    //    bbbb.innerText = date

    const date = new Date();
       const myDate = document.getElementById('date');
       myDate.innerText = date.toUTCString()