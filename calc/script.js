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
let tab_of_operations = ['%','C','UNDO','1/x','¬','÷','×','+','-'];
let tab_of_special_signs = ['¬','1/x','%'];

sign.forEach((button) => button.addEventListener('click', operate));
number.forEach((button) => button.addEventListener('click', display_number));
equal.forEach((button) => button.addEventListener('click', check_operator));

function check_operator(){
    if(!p_previous.textContent.includes('=')){
        console.log(p_previous.textContent.slice(-1));
        if(!tab_of_operations.includes(p_previous.textContent.slice(-1)) || (p_current.textContent !== '' && p_current.textContent !== '-')){
            let operator_for_equal = '';
            operator_for_equal = current_operator;
            console.log(operator_for_equal);
            math_for_equal(operator_for_equal);
        }
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
    if(p_current.textContent !== '' && this.textContent === 'UNDO'){
        p_current.textContent = p_current.textContent.slice(0,-1);
        return;
    }else if(p_previous.textContent !== '' && this.textContent === 'UNDO'){
        p_previous.textContent = p_previous.textContent.slice(0,-1);
        return;
    }
    if(p_current.textContent !== '' && p_current.textContent !== '-'){
        if(p_previous.textContent === ''){
            if(tab_of_special_signs.includes(this.textContent)){
                current_operator = this.textContent;
                p_previous.textContent = p_current.textContent;
                math(current_operator);
            }else{
                current_operator = this.textContent;
                if(this.textContent !== 'UNDO'){
                    console.log(453);
                    p_previous.textContent = p_current.textContent;   
                    p_previous.textContent += current_operator;
                }
            }   
        }else{ 
            if(!p_previous.textContent.includes(this.textContent) && this.textContent !== 'UNDO'){ // tu moga byc problemy z bardziej zlozonymi dzialaniami
                console.log(this.textContent);
                console.log(current_operator)
                console.log(432534534);
                console.log('piewrszy math'); 
                if(tab_of_special_signs.includes(this.textContent)){
                    console.log(1.1);
                    math(current_operator);
                    math(this.textContent);
                }else{
                    console.log(1.2);
                    math(current_operator); 
                    p_previous.textContent += this.textContent;
                }
            }else if(!p_previous.textContent.includes('=') && this.textContent !== 'UNDO'){// dodane warunek if wczesniej samo else
                console.log('drugi math');
                math(current_operator);
                p_previous.textContent += current_operator;
            }
            else if(this.textContent !== 'UNDO'){
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
        if(!tab_of_special_signs.includes(this.textContent)){
            p_previous.textContent += this.textContent;
            current_operator = this.textContent;
        } 
    }
}

function math(current_operator){
    if(current_operator === '×'){
        current_operator = '*';
    }else if(current_operator === '÷'){
        current_operator = '/';
    }
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
            if(p_previous.textContent.includes('=')){
                p_previous.textContent = parseFloat(p_current.textContent);
            }else{
                p_previous.textContent = parseFloat(p_previous.textContent) * parseFloat(p_current.textContent);
            }
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break; 
        case '/':
            if(p_previous.textContent.includes('=')){
                p_previous.textContent = parseFloat(p_current.textContent);
            }else{
                p_previous.textContent = parseFloat(p_previous.textContent) / parseFloat(p_current.textContent);
            }
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break;
        case '¬':
            console.log(parseFloat(p_previous.textContent));
            if(p_previous.textContent !== ''){
                console.log('esssss');
                p_previous.textContent = parseFloat(p_previous.textContent) * -1;
            }          
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3) * -1;
            }
            break;
        case '1/x':
            if(p_previous.textContent !== ''){
                console.log('esssss');
                p_previous.textContent = 1/parseFloat(p_previous.textContent);
            }          
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = 1/parseFloat(p_previous.textContent);
            }
            break;
        case '%':
            
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            if(p_current.textContent.includes('-')){
                console.log('zamiana * -1');
                p_current.textContent = parseFloat(p_previous.textContent) / 100;
            }
            


    }
}

function math_for_equal(current_operator){
    if(current_operator === '×'){
        current_operator = '*';
    }else if(current_operator === '÷'){
        current_operator = '/';
    }
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
                p_current.textContent = parseFloat(p_current.textContent).toFixed(3);
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







