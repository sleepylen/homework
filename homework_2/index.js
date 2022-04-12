function check()
{
    let email = document.getElementById("exampleInputEmail");
    let password = document.getElementById("exampleInputPassword");

    document.getElementById('errorMessage').innerHTML = "";

    if(email.value == ''){
        document.getElementById('errorMessage').innerHTML += "Ваш email не заполнен<br>";
    }

    if(password.value == ''){
        document.getElementById('errorMessage').innerHTML += "Ваш пароль не заполнен<br>";
    }

    if(password.value.length <= 5){
        document.getElementById('errorMessage').innerHTML += "Ваш пароль слишком короткий<br>";
    }
}