const previous = document.querySelectorAll('#previous');
const current = document.querySelectorAll('#current');

const sign = document.querySelectorAll('.sign');
const number = document.querySelectorAll('.number');
const equal = document.querySelectorAll('.equal');

let p_current = document.querySelector("#current p")
let p_previous = document.querySelector("#previous p")
let current_number = "";

sign.forEach((button) => button.addEventListener('click', operate));
equal.forEach((button) => button.addEventListener('click', math));

number.forEach((button) => {
    button.addEventListener('click', display_number);
})

function display_number(){
    if(this.textContent === '.' && p_current.textContent === ''){
        p_current.textContent = "0.";
    }else if(p_current.textContent.includes('.')){
        if(this.textContent !== '.'){
            p_current.textContent += this.textContent;
        }else{
            return;
        }
    }else if(p_previous.textContent.includes('=')){
        p_current.textContent = '';
        p_previous.textContent = '';
        p_current.textContent = this.textContent;
    }
    else{
        p_current.textContent += this.textContent;
    }
}

function operate(){
    if(p_current.textContent !== ''){
        p_previous.textContent = p_current.textContent;
        p_previous.textContent += this.textContent;
        p_current.textContent = '';
    }
}

function math(){
    if(parseFloat(p_current.textContent) < Infinity){
        if(p_previous.textContent.includes('+') && !p_previous.textContent.includes('=')){
            let temp = parseFloat(p_current.textContent);
            p_current.textContent = parseFloat(p_previous.textContent) + parseFloat(p_current.textContent);
            p_previous.textContent += temp + ' =';
        }
    }else{
        p_current.textContent = "Nieskończoność";
    }
    
}

