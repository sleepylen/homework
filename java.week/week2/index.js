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

const button = document.querySelector('.btn');

const form = document.forms.myForm;
const processor = form.elements.processor;
const motherBoard = form.elements.motherBoard;
const videoCard = form.elements.videoCard;
const powerUnit = form.elements.powerUnit;
const radioBox = form.elements.box;
const checkbox = form.elements.cooler;
const radioDataStorage = form.elements.dataStorage;

button.addEventListener('click', function(evt){
    evt.preventDefault();
    const sum = +processor.value + +motherBoard.value + +videoCard.value + +powerUnit.value + +radioBox.value + +radioDataStorage.value; 

    alert(`Стоимость вашего хомпуктера составляет ${sum} бубликов`)
});