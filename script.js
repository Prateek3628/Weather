// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2962469620msh4dc1123cbbe1033p1b094bjsn714c7dec813e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getcity = (city) => {
    cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        // WIND_DEGREES.innerHTML = response.WIND_DEGREES
        wind_speed.innerHTML = response.wind_speed
    })

    .catch(err => console.log(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getcity(city.value)
})
getcity("Bihar")
