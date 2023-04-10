const previous = document.querySelectorAll('.previous');
const current = document.querySelectorAll('#current');

const sign = document.querySelectorAll('.sign');
const number = document.querySelectorAll('.number');
const equal = document.querySelectorAll('.equal');
const clear = document.querySelectorAll(".clear");
const p_current = document.querySelector("#current p")
const p_previous = document.querySelector("#number")
const p_previous_2 = document.querySelector("#number_2");
const operator_previous = document.querySelector("#operator");
const equal_previous = document.querySelector("#equal_previous");
const all = document.querySelectorAll('.all');

let current_number = 0;
let temp_operator = '';
let temp_sqr = '';

sign.forEach((button) => button.addEventListener('click', operate));
equal.forEach((button) => button.addEventListener('click', math));

number.forEach((button) => {
    button.addEventListener('click', display_number);
})

clear.forEach((button) => button.addEventListener('click', remove));

function remove(){
    all.forEach((p) => {
        p.textContent = '';
    })
}

function display_number(){
    if(this.textContent === '.' && (p_current.textContent === '' || p_current.textContent === '-')){
        if(p_current.textContent === '-'){
            p_current.textContent = "-0.";
        }else{
            p_current.textContent = "0.";
        }
    }else if(p_current.textContent.includes('.')){
        if(this.textContent !== '.'){
            p_current.textContent += this.textContent;
        }else{
            return;
        }
    }else if(equal_previous.textContent.includes('=')){
        p_current.textContent = '';
        p_previous.textContent = '';
        operator_previous.textContent = '';
        p_previous_2.textContent = '';
        equal_previous.textContent = '';
        p_current.textContent = this.textContent;
    }
    else{
        p_current.textContent += this.textContent;
    }
}

function operate(){  
    current_number = p_current.textContent;
    if(p_current.textContent !== ''){
        console.log(1);
        if(p_previous_2.textContent === '' && equal_previous.textContent === ''){
            if(this.textContent !== 'x2'){
                p_previous.textContent = p_current.textContent;
            }
            console.log(2);
            if(p_previous.textContent === '-'){
                console.log(2.2);
                operator_previous.textContent = '';
            }else if(this.textContent !== 'x2'){
                console.log(2.3);
                temp_operator = this.textContent;
                operator_previous.textContent = this.textContent;
            }
            if(p_current.textContent === '-' && p_previous.textContent === '-'){
                console.log(2.4);
                p_previous.textContent = '';
            }
            p_current.textContent = '';
        }
        else if(operator_previous.textContent === ''){
            console.log(3);
            p_previous.textContent = p_current.textContent;
            operator_previous.textContent += this.textContent;
            p_current.textContent = '';
        }else if(p_previous !== ''){
            console.log(4);
            p_previous.textContent = p_current.textContent;
            operator_previous.textContent = this.textContent;
            p_previous_2.textContent = '';
            equal_previous.textContent = '';
            p_current.textContent = '';
        }
        if(this.textContent === 'x2'){
            console.log(5);
            if(p_previous.textContent === ''){
                temp_sqr = current_number;
                operator_previous.textContent = 'sqr';
                p_previous_2.textContent = '('+temp_sqr+')';
                p_current.textContent = '';
                math();
            }else{
                temp_sqr = current_number;
                operator_previous.textContent = temp_operator + 'sqr';
                p_previous_2.textContent = '('+temp_sqr+')';
                p_current.textContent = '';
            }
        }
    }else if(p_current.textContent === '' && this.textContent === '-'){
        p_current.textContent = '-';
    }else{
        previous.textContent = '';
    }
}

function math(){
        let temp = parseFloat(p_current.textContent);
        switch(operator_previous.textContent){
            case('+'):
                if(equal_previous.textContent === ''){
                    p_current.textContent = parseFloat(p_previous.textContent) + parseFloat(p_current.textContent);
                    p_previous_2.textContent = temp;
                    equal_previous.textContent += ' =';
                    current_number = parseFloat(p_current.textContent);
                    break;
                }else{
                    let temp_p_previous = 0;
                    let temp_p_current = 0;
                    temp_p_previous = parseFloat(p_previous.textContent) + parseFloat(p_previous_2.textContent);
                    p_previous.textContent = temp_p_previous;
                    temp_p_current = parseFloat(p_previous.textContent) + parseFloat(p_previous_2.textContent);
                    p_current.textContent = temp_p_current;
                    break;
                }
            case('-'):
                if(equal_previous.textContent === ''){
                    p_current.textContent = parseFloat(p_previous.textContent) - parseFloat(p_current.textContent);
                    p_previous_2.textContent = temp;
                    equal_previous.textContent += ' =';
                    current_number = parseFloat(p_current.textContent);
                    break;
                }else{
                    let temp_p_previous = 0;
                    let temp_p_current = 0;
                    temp_p_previous = parseFloat(p_previous.textContent) - parseFloat(p_previous_2.textContent);
                    p_previous.textContent = temp_p_previous;
                    temp_p_current = parseFloat(p_previous.textContent) - parseFloat(p_previous_2.textContent);
                    p_current.textContent = temp_p_current;
                    break;
                }
            case('×'):
                if(equal_previous.textContent === ''){
                    p_current.textContent = parseFloat(p_previous.textContent) * parseFloat(p_current.textContent);
                    p_previous_2.textContent = temp;
                    equal_previous.textContent += ' =';
                    current_number = parseFloat(p_current.textContent);
                    break;
                }else{
                    let temp_p_previous = 0;
                    let temp_p_current = 0;
                    temp_p_previous = parseFloat(p_previous.textContent) * parseFloat(p_previous_2.textContent);
                    p_previous.textContent = temp_p_previous;
                    temp_p_current = parseFloat(p_previous.textContent) * parseFloat(p_previous_2.textContent);
                    p_current.textContent = temp_p_current;
                    break;
                }
            case('÷'):
                if(equal_previous.textContent === ''){
                    p_current.textContent = parseFloat(p_previous.textContent) / parseFloat(p_current.textContent);
                    p_previous_2.textContent = temp;
                    equal_previous.textContent += ' =';
                    current_number = parseFloat(p_current.textContent);
                    break;
                }else{
                    let temp_p_previous = 0;
                    let temp_p_current = 0;
                    temp_p_previous = parseFloat(p_previous.textContent) / parseFloat(p_previous_2.textContent);
                    p_previous.textContent = temp_p_previous;
                    temp_p_current = parseFloat(p_previous.textContent) / parseFloat(p_previous_2.textContent);
                    p_current.textContent = temp_p_current;
                    break;
                }
        }
    }
    


