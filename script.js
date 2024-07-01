'use strict';

const decrement = document.querySelector('.decrement');
const increment = document.querySelector('.increment');
const Reset = document.querySelector('.reset');
const count = document.querySelector('.count');

let num = 0;

increment.addEventListener('click', function () {
    num = num + 1;
    if (num > 0) {
        count.style.color = "green";
    }
    else if (num === 0) {
        count.style.color = "black";
    }
    count.textContent = num;

})

decrement.addEventListener('click', function () {
    num = num - 1;
    if (num < 0) {
        count.style.color = "red";
    }
    else if (num === 0) {
        count.style.color = "black";
    }
    count.textContent = num;
})

Reset.addEventListener('click', function () {
    num = 0;
    count.style.color = "black";
    count.textContent = num;

})