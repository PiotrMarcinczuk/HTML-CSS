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
let temp_exp = 0;

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
    console.log(this.textContent)
    current_number = p_current.textContent;
    if(p_current.textContent !== ''){
        if(p_previous_2.textContent === '' && equal_previous.textContent === ''){          
            if(this.textContent !== 'x2' && this.textContent !== '√x'){
                console.log(2.1);
                p_previous.textContent = p_current.textContent;
            }
            if(p_previous.textContent === '-'){
                console.log(2.2);
                operator_previous.textContent = '';
            }else if(this.textContent !== 'x2' && this.textContent !== '√x'){
                console.log(2.3);
                temp_operator = this.textContent;
                operator_previous.textContent = this.textContent;
            }
            if(p_current.textContent === '-' && p_previous.textContent === '-'){
                console.log(2.4);
                p_previous.textContent = '';
            }
            p_current.textContent = '';
            console.log(2);
        }else if(p_previous.textContent !== '' && p_previous_2.textContent !== '' && this.textContent !== 'x2'){
            p_previous.textContent = p_current.textContent;
            p_previous_2.textContent = '';
            equal_previous.textContent = '';      
            p_current.textContent = '';
            operator_previous.textContent = this.textContent;  
        }
        else if(operator_previous.textContent === ''){
            console.log(3);
            p_previous.textContent = p_current.textContent;
            operator_previous.textContent += this.textContent;
            p_current.textContent = '';
        }else if(p_previous !== ''){
            if(this.textContent !== 'x2'){
                operator_previous.textContent = this.textContent;
                p_previous.textContent = p_current.textContent;
                p_previous_2.textContent = '';
                p_current.textContent = '';
            }else{
                operator_previous.textContent = this.textContent;
                p_previous_2.textContent = '';
                equal_previous.textContent = '';
                p_current.textContent = '';
                p_previous.textContent = ''; //zmiany potencjalne klopoty
            }
        }
        if(this.textContent === 'x2'){
            if(p_previous.textContent === '' && equal_previous.textContent === ''){
                console.log(1);
                console.log(current_number);
                temp_sqr = current_number;
                operator_previous.textContent = 'sqr';
                p_previous_2.textContent = '('+temp_sqr+')';
                p_current.textContent = '';
                console.log(p_previous_2.textContent)
                math();
            }else{
                console.log(this.textContent)
                console.log(12)
                temp_sqr = current_number;
                operator_previous.textContent = temp_operator + 'sqr';
                p_previous_2.textContent = '('+temp_sqr+')';
                p_current.textContent = '';
            }
        }
        if(this.textContent === '√x'){
            if(p_previous.textContent === '' && equal_previous.textContent === ''){
                temp_sqr = current_number;
                operator_previous.textContent = '√';
                p_previous_2.textContent = temp_sqr;
                p_current.textContent = '';
                p_previous.textContent = '';
                math();
            }else{
                temp_sqr = current_number;
                operator_previous.textContent = temp_operator + '√';
                p_previous_2.textContent = temp_sqr;
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
            // POTEGOWANIE --------------------------
            case(temp_operator + 'sqr'):
                if(p_previous.textContent === ''){
                    let temp_p_current = temp_sqr * temp_sqr;
                    p_current.textContent = temp_p_current;
                    break;
                }
                else{
                    math_sqr_operator(temp_operator);
                    break;
                }
            case('sqr'):
                let temp_case1 = temp_sqr * temp_sqr;
                p_current.textContent = temp_case1;
                break;
            // POTEGOWANIE /////////////////////////
            // PIERWIASTKOWANIE --------------------------
            case(temp_operator + '√'):
                if(p_previous.textContent === ''){
                    let temp_p_current = temp_sqr ** (1/2);
                    p_current.textContent = temp_p_current;
                    break;
                }else{
                    math_sqr_operator(temp_operator);
                    break;
                }
            case('√'):
                let temp_case2 = temp_sqr ** (1/2);
                p_current.textContent = temp_case2;
                break;
            // PIERWIASTKOWANIE /////////////////////////////////////////////////
        }
    }

    function math_sqr_operator(temp_operator){
        if(temp_operator === '+'){
            if(equal_previous.textContent === ''){
                let temp_p = temp_sqr * temp_sqr;
                p_current.textContent = parseFloat(p_previous.textContent) + temp_p;
                equal_previous.textContent += ' =';
            }else{
                let temp_p_previous = 0;
                let temp_p_current = 0;
                let result = temp_sqr*temp_sqr;
                temp_p_previous = parseFloat(p_previous.textContent) + parseFloat(result);
                p_previous.textContent = temp_p_previous;
                temp_p_current = parseFloat(p_previous.textContent) + parseFloat(result);
                p_current.textContent = temp_p_current;
            }
        }
        if(temp_operator === '-'){
            if(equal_previous.textContent === ''){
                let temp_p = temp_sqr * temp_sqr;
                p_current.textContent = parseFloat(p_previous.textContent) - temp_p;
                equal_previous.textContent += ' =';
            }else{
                let temp_p_previous = 0;
                let temp_p_current = 0;
                let result = temp_sqr*temp_sqr;
                temp_p_previous = parseFloat(p_previous.textContent) - parseFloat(result);
                p_previous.textContent = temp_p_previous;
                temp_p_current = parseFloat(p_previous.textContent) - parseFloat(result);
                p_current.textContent = temp_p_current;
            }
        }
        if(temp_operator === '×'){
            if(equal_previous.textContent === ''){
                let temp_p = temp_sqr * temp_sqr;
                p_current.textContent = parseFloat(p_previous.textContent) * temp_p;
                equal_previous.textContent += ' =';
            }else{
                let temp_p_previous = 0;
                let temp_p_current = 0;
                let result = temp_sqr*temp_sqr;
                temp_p_previous = parseFloat(p_previous.textContent) * parseFloat(result);
                p_previous.textContent = temp_p_previous;
                temp_p_current = parseFloat(p_previous.textContent) * parseFloat(result);
                p_current.textContent = temp_p_current;
            }
        }
        if(temp_operator === '÷'){
            if(equal_previous.textContent === ''){
                let temp_p = temp_sqr * temp_sqr;
                p_current.textContent = parseFloat(p_previous.textContent) / temp_p;
                equal_previous.textContent += ' =';
            }else{
                let temp_p_previous = 0;
                let temp_p_current = 0;
                let result = temp_sqr*temp_sqr;
                temp_p_previous = parseFloat(p_previous.textContent) / parseFloat(result);
                p_previous.textContent = temp_p_previous;
                temp_p_current = parseFloat(p_previous.textContent) / parseFloat(result);
                p_current.textContent = temp_p_current;
            }
        }
        if(temp_operator === '√'){
            if(equal_previous.textContent === ''){
                let temp_p = temp_sqr * temp_sqr;
                p_current.textContent = parseFloat(p_previous.textContent) / temp_p;
                equal_previous.textContent += ' =';
            }else{
                let temp_p_previous = 0;
                let temp_p_current = 0;
                let result = temp_sqr*temp_sqr;
                temp_p_previous = parseFloat(p_previous.textContent) / parseFloat(result);
                p_previous.textContent = temp_p_previous;
                temp_p_current = parseFloat(p_previous.textContent) / parseFloat(result);
                p_current.textContent = temp_p_current;
            }
        }
    }


