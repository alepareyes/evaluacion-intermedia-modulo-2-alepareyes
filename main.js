'use strict';


// ELEMENTOS CAMBIANTES E INTERACTIVOS
const button = document.querySelector('.js-button');
const input = document.querySelector('.js-number');
const hint = document.querySelector('.js-hint');
const numberOfTries = document.querySelector('.js-tries');
const counterSpan = document.querySelector('.js-tries');

let count = 0;  //Para el recuento


/////////////////RANDOM NUMBER////////////////
const getRandomNumber = function (max) {
    console.log("Número random generado:");
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);  ///<-num random 
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
        hint.classList.remove('zoom');
    } else if (inputNumberValue > randomNumber) {
        incCounter();
        hint.innerHTML = 'Demasiado alto';
        hint.classList.remove('zoom');
    } else if (inputNumberValue < randomNumber) {
        incCounter();
        hint.innerHTML = 'Demasiado bajo...';
        hint.classList.remove('zoom');
    } else if (inputNumberValue === randomNumber) {
        incCounter();
        hint.innerHTML = '¡Lo adivinaste!';
        hint.classList.add('zoom');
    }
}
//////////////////////////////////////////////////////////

//You are writing many times "trackEl.innerHTML = 'something';", what about making a function that accepts a string as param and paints it into 'trackEl'?
/*
function updateHint(text) {
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