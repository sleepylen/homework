/* function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}

alert( getSecondsToTomorrow() ); */

/* function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") ); */


let elem = document.getElementById('input');
elem.addEventListener('focus', func);
elem.addEventListener('blur', func2);

function func() {
    elem.placeholder = '';
}

function func2() {
    let elem = document.getElementById('input');
    let elems = document.getElementsByClassName('name');

    if (elem.value !== 0) {
        let str = elem.value;
        let arr = str.split(' ');

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toLowerCase();
            arr[i] = arr[i].split('');
            arr[i][0] = arr[i][0].toUpperCase();
            arr[i] = arr[i].join('');
            elems[i].value = arr[i];
        }
    }

    if (elem.value == 0) {
        elem.placeholder = 'ФИО';

        for (let i = 0; i < elems.length; i++) {
            elems[i].value = '';
        }
    }
}

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

/* alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) ); */



let button = document.querySelector('.btn');
let result = document.getElementById('result');

btn.addEventListener('click', toGenerate());

function toGenerate() {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);

    console.log(rand);
}
/* btn.addEventListener('click', toGenerate); */

/* function toGenerate() {
    
    /* let numberRandom = Math.round((Math.random(-10)*10));
    const lst = [];

    for (let i =0; i < 10; ++i) {
        lst.push(numberRandom(-10, 10))
    }
    console.log(lst.join()); */

    /* result.innerHTML = 'Сгенерировали' + lst + 'Минимальное' + minNum + 'Максимальное' + maxNum + 'Среднее арифметическое' + averageNum + 'Сумма чисел' + sumNum  + 'Произведение чисел' + multiNum; */


