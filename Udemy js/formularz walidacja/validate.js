const myForm = document.querySelector('form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPasswordRepeat = document.getElementById('passwordRepeat');

const nameFail = document.getElementById('nameFail');
const emailFail = document.getElementById('emailFail');
const passwordFail = document.getElementById('passwordFail');
const passwordRepeatFail = document.getElementById('passwordRepeatFail');

const obj = new ValidateForm(inputName, inputEmail, inputPassword, inputPasswordRepeat);

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    obj.init();
})