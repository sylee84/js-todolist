// https://home.openweathermap.org/

const API_KEY = '649b8906c92f91093106a750c6db11cd'

//success
function onGeoOK(position) {
    //위도
    const lat = position.coords.latitude;
    //경도
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    // fetch = javascript가 대신 url를 요청 기본은 promise
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
//error
function onGeoError() {
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

