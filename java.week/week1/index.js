function setSelected(operation) {
    const selected = document.querySelector ('.btn.selected');
    if (selected) {
selected.classList.remove('selected');
    }
    document.querySelector(`.${operation}`).classList.add('selected');
}

function calc( firstNum, lastNum, selectedOperation) {
    switch (selectedOperation) {
        case 'plus':
            return firstNum + lastNum;
        case 'minus':
            return firstNum - lastNum;
        case 'multiply':
            return firstNum * lastNum;
        case 'divide':
            return firstNum / lastNum;
    }
}

function showResult() {
    const firstNum = +document.querySelector('.first-num').value;
    const lastNum = +document.querySelector('.last-num').value;
    const result = document.querySelector('.result-text');
    const selectedButton = document.querySelector('.btn.selected');

    if (selectedButton) {
        const calcResult = calc(firstNum, lastNum, selectedButton.classList[1]);
        result.innerHTML = isNaN(calcResult) ? 'Пожалуйста, укажите числа' : `Ваш результат: ${calcResult}`;
    }
}