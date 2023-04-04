const previous = document.querySelectorAll('#previous');
const current = document.querySelectorAll('#current');

const sign = document.querySelectorAll('.sign');
const number = document.querySelectorAll('.number');
const equal = document.querySelectorAll('#equal');

let p_current = document.querySelector("#current p")
let p_previous = document.querySelector("#previous p")
let current_number = "";

sign.forEach((button) => button.addEventListener('click', operate))

number.forEach((button) => {
    button.addEventListener('click', display_number);
})

function display_number(){
    if(this.textContent === '.' && p_current.textContent === ''){
        p_current.textContent = "0.";
        return;
    }else if(p_current.textContent.includes('.')){
        return
    }
    p_current.textContent += this.textContent;
    
}

function operate(){
    if(p_current.textContent !== ''){
        p_previous.textContent = this.textContent;
    }
}

