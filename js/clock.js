const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    // padStart(여기에 숫자만큼, '0'string을 앞에 넣어라) string일 경우 쓸수 있음
    // 1.padStart(5,'0') = 00001
    // padEnd(여기에 숫자만큼, '0'string을 뒤에 넣어라) string일 경우 쓸수 있음
    // 1.padEnd(5,'0') = 10000
    const housrs = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${housrs}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000)

