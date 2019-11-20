'use strict';


// ELEMENTOS CAMBIANTES E INTERACTIVOS
const button = document.querySelector('.js-button');
const input = document.querySelector('.js-number');
const hint = document.querySelector('.js-hint');
const numberOfTries = document.querySelector('.js-tries');
const counterSpan = document.querySelector('.js-tries');

let count = 0;


/////////////////RANDOM NUMBER////////////////
const getRandomNumber = function (max) {
    console.log("Número random generado:");
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);
/////////////////////////////////////////////


/////////////////HANDLE BUTTON///////////////
const handlerEvent = function (ev) {
    ev.preventDefault();
    compareUserNumber();
}
/////////////////////////////////////////////



/////////////COMPARE NUMBER & HITS ABOUT NUMBER////////
const compareUserNumber = function () {
    const inputNumberValue = parseInt(input.value);
    if (inputNumberValue < 1 || inputNumberValue > 100) {
        hint.innerHTML = 'El número debe estar entre el 1 y 100';
    } else if (inputNumberValue > randomNumber) {
        incCounter();
        hint.innerHTML = 'Demasiado alto';
    } else if (inputNumberValue < randomNumber) {
        incCounter();
        hint.innerHTML = 'Demasiado bajo...';
    } else if (inputNumberValue === randomNumber) {
        incCounter();
        hint.innerHTML = '¡Lo adivinaste!';
    }
}
//////////////////////////////////////////////////////////
/* function updateHint(text) {
    hint.ineerHTML = text;
} */



///////////////////////COUNTER////////////////////////////
function incCounter() {
    count += 1;
    counterSpan.innerHTML = count;
}
//////////////////////////////////////////////////////////

//////////////////////LISTEN EVENTS//////////////////////
button.addEventListener('click', handlerEvent);