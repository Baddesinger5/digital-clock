
function clock(){
    let date = new Date();

    let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    document.querySelector('#hour').innerHTML = hours;

    let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    document.querySelector('#minute').innerHTML = minutes;

    let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.querySelector('#second').innerHTML = seconds;

    let days = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    document.querySelector('#number-of-day').innerHTML = days;

    let daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let nameDate = date.getDay();
    document.querySelector('#name-date').innerHTML = daysName[nameDate];
}
setInterval(clock, 1000);
clock();