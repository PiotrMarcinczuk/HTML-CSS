const button = document.getElementById('countdown-button');
let intervalId = 0;
button.addEventListener('click', startInterval)

function init(){
    let timeValue = document.getElementById('timer').value;
    let finalTime = new Date(timeValue);

    let currentDate = new Date();
    let current = currentDate.getTime();

    let result = finalTime - current;
    result = Math.floor(result / 1000)

    const pDays = document.getElementById('days');
    let days = Math.floor(result / ((60 * 60) * 24));
    pDays.innerHTML = days;

    const pHours = document.getElementById('hours');
    let hours = Math.floor(result % ((60 * 60) * 24) / (60 * 60));
    pHours.innerHTML = hours;

    const pMinutes = document.getElementById('minutes');
    let minutes = Math.floor((result % (60 * 60)) / 60);
    pMinutes.innerHTML = minutes;

    const pSeconds = document.getElementById('seconds');
    let seconds = Math.floor(result % 60);
    pSeconds.innerHTML = seconds;
    if(result <= 0){
        clearInterval(intervalId);
        let div = document.getElementById('messege');
        div = div.style.display = 'block';
    } 
    console.log(result);
}

function startInterval(){
    let div = document.getElementById('messege');
    div = div.style.display = 'none';
    intervalId = setInterval(init, 1000);
}

