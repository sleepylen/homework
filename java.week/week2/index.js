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

// Калькулятор расчета стоимости

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

// Задачи с массивами

// первая

let arr = ['js', 'css', 'html'];

alert( arr[0] );

// вторая

let arr2 = [0, 1, false, 2, undefined, '', 3, null];

const filteredarr2 = arr2.filter(Boolean);

alert( filteredarr2 );

// третья

let matrix = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];

const el = matrix.findIndex(el=>el.length>3);

alert( el );