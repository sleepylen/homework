/* function sumInput() {
    let numbers = [];

    while (true) {

    let value = prompt('Введите число', 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert( sumInput() ); */

const inputs = document.querySelectorAll('input');
const option = document.querySelectorAll('option');
const radioBox = document.querySelectorAll('input[name="box"]');
const radioDataStorage = document.querySelectorAll('input[name="dataStorage"]');
const checkBox = document.querySelector('input[name="cooler"]');
const button = document.querySelector('.btn');
let totalPriseElement = document.querySelector(".result");

function calculate() {
    totalPrise = 0;

    for 
}