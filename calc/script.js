const previous = document.querySelectorAll('.previous');
const current = document.querySelectorAll('.current');
const sign = document.querySelectorAll('.sign');
const number = document.querySelectorAll('.number');
const p_current = document.querySelector('.current p');
const p_previous = document.querySelector('.previous p');
const clear = document.querySelectorAll('.clear');
const equal = document.querySelectorAll('.equal');

let current_number = 0;
let current_operator = '';
let tab_of_operations = ['%','C','UNDO','1/x','+/-','/','*','+','-'];
sign.forEach((button) => button.addEventListener('click', operate));
number.forEach((button) => button.addEventListener('click', display_number));
equal.forEach((button) => button.addEventListener('click', check_operator));
function check_operator(){
    if(!p_previous.textContent.includes('=')){
        let operator_for_equal = '';
        operator_for_equal = current_operator;
        console.log(operator_for_equal);
        math_for_equal(operator_for_equal);
    }  
}
clear.forEach((button) => {
    button.addEventListener('click', () => {
        p_current.textContent = '';
        p_previous.textContent = '';
    })
})

function display_number(){
    if(this.textContent === '.' && (p_current.textContent === '' || p_current.textContent === '-')){
        if(p_current.textContent === '-'){
            p_current.textContent = '-0.'
        }else{
            p_current.textContent = '0.'
        }
    }else if(p_current.textContent !== '' && !p_current.textContent.includes('.')){
        p_current.textContent += this.textContent;
    }else if(this.textContent !== '.' && p_current.textContent.includes('.')){
        p_current.textContent += this.textContent;
    }else{
        if(this.textContent !== '.'){
            p_current.textContent += this.textContent;
        }
    }
    if(p_previous.textContent.includes('=')){
        p_current.textContent = '';
        p_previous.textContent = '';
        p_current.textContent += this.textContent;
    }
}
function operate(){
    if(p_current.textContent !== '' && p_current.textContent !== '-'){
        if(p_previous.textContent === ''){
            if(this.textContent === '+/-'){
                current_operator = this.textContent;
                current_number = p_current.textContent;
                p_previous.textContent = current_number;
                math(current_operator);
            }else{
                current_operator = this.textContent;
                current_number = p_current.textContent;
                p_previous.textContent = current_number;   
                p_previous.textContent += current_operator;
            }   
        }else{ 
            if(!p_previous.textContent.includes(this.textContent)){ // tu moga byc problemy z bardziej zlozonymi dzialaniami
                console.log(this.textContent);
                console.log(current_operator)
                console.log(432534534);
                console.log('piewrszy math'); 
                math(current_operator); // wczesniej poprostu math bez ifas
                p_previous.textContent += this.textContent;
            }else if(!p_previous.textContent.includes('=')){// dodane warunek if wczesniej samo else
                console.log('drugi math');
                math(current_operator);
                p_previous.textContent += current_operator;
                current_number = parseFloat(p_previous.textContent);   
            }
            else{
                math(current_operator);

            }
        }
        p_current.textContent = '';
    }else if(this.textContent === '-'){
        if(!p_current.textContent.includes('-') && !p_previous.textContent.includes('-')){
            p_current.textContent += '-';
            console.log('cos z -');
            console.log(this.textContent);
            console.log(current_operator);
        }else if(this.textContent === '-' && !p_current.textContent.includes('-')){
            p_current.textContent += this.textContent;
        }
    }
    if(!p_current.textContent.includes('-')){
        current_operator = this.textContent;
    }
    if(p_previous.textContent !== '' && p_current.textContent === '' && !tab_of_operations.includes(p_previous.textContent.slice(-1)) ){
        if(this.textContent !== '+/-'){
            p_previous.textContent += this.textContent;
            current_operator = this.textContent;
        } 
    }
}

function math(current_operator){
    let temp = 0;
    switch(current_operator){
        case '+':
            if(p_previous.textContent.includes('=')){ // ty '=' byla nie wiem dlaczego
                p_previous.textContent = parseFloat(p_current.textContent);
            }else{
                p_previous.textContent = parseFloat(p_previous.textContent) + parseFloat(p_current.textContent);
            }
            
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break; 
        case '-':
            // kiedy pierwsza liczba zaczyna sie od -8 to zle mnozy
            // bugi z '+/-'
            // czasem niepoprawne operacje
            console.log(parseFloat(p_previous.textContent));
            p_previous.textContent = parseFloat(p_previous.textContent) - parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break; 
        case '*':
            temp = p_previous.textContent;
            //mnozenie 4*5 = 20 i potem * nie dziala tu trzeba zastosowac jakiegos ifa ktory bedzie sprawdzial czy jest znak = w p_previosu.
            p_previous.textContent = parseFloat(p_previous.textContent) * parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break; 
        case '/':
            console.log(parseFloat(p_previous.textContent));
            p_previous.textContent = parseFloat(p_previous.textContent) / parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break;
        case '+/-':
            console.log(parseFloat(p_previous.textContent));
            p_previous.textContent = parseFloat(p_previous.textContent) * -1;
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break;

    }
}

function math_for_equal(current_operator){
    let temp = 0;
    switch(current_operator){
        case '+':
            temp = p_previous.textContent
            p_previous.textContent = temp + p_current.textContent + '=';
            p_current.textContent = parseFloat(temp) + parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break; 
        case '-':
            // kiedy pierwsza liczba zaczyna sie od -8 to zle mnozy
            // bugi z '+/-'
            // czasem niepoprawne operacje
            temp = p_previous.textContent
            p_previous.textContent = temp + p_current.textContent + '=';
            p_current.textContent = parseFloat(temp) - parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break; 
        case '*':
            temp = p_previous.textContent
            p_previous.textContent = temp + p_current.textContent + '=';
            p_current.textContent = parseFloat(temp) * parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent);
            }
            break; 
        case '/':
            temp = p_previous.textContent
            p_previous.textContent = temp + p_current.textContent + '=';
            p_current.textContent = parseFloat(temp) / parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent);
            }
            break;
    }
}







