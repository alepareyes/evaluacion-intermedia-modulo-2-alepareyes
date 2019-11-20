'use strict';


// ELEMENTOS CAMBIANTES E INTERACTIVOS
const button = document.querySelector(".js-button");
const input = document.querySelector('.js-number');
const hint = document.querySelector(".js-hint");
const numberOfTries = document.querySelector('.js-tries');


const getRandomNumber = function (max) {
    console.log("Número random generado:");
    return Math.ceil(Math.random() * max);
};

const randomNumber = getRandomNumber(100);

console.log(randomNumber);

function clickButton() {
    console.log('click en prueba');
};


const algo = function () {
    if (parseInt(input.value) === randomNumber) {
        return hint.innerHTML = '¡Lo adivinaste!'
    } else if (parseInt(input.value) > randomNumber) {
        return hint.innerHTML = 'Demasiado alto'
    } else if (parseInt(input.value) < randomNumber) {
        return hint.innerHTML = 'Demasiado bajo...'
    }

};

/* click boton sobre formulario
se refresca página
prevent default; */

button.addEventListener('click', algo);