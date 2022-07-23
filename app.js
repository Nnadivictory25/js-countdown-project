'use strict';

const timeLeft = document.querySelector('#time-left');

const birthday = new Date('05/01/2023')
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId


// console.log(birthday)

function countdown() {
    const today = new Date()
    const timeSpan = birthday - today
    // console.log(timeSpan);

    if (timeSpan <= -day) {
        timeLeft.innerHTML = `Hope you had a great birthday`
        clearInterval(timerId)
    } else if (timeSpan <= 0) {
        timeLeft.innerHTML = `Happy Birthday`
        clearInterval(timerId)
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeLeft.innerHTML = `${days}days ${hours}hours ${minutes}min ${seconds}seconds`

}


timerId = setInterval(countdown, second)