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

function change_color(elem, color) {
    elem.style.background = color;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}