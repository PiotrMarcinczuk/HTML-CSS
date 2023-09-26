class ValidateForm{
    constructor(name, email, password, passwordRepeat){
        this.name =  name,
        this.email = email,
        this.password = password,
        this.passwordRepeat = passwordRepeat

        this.inputs = [this.name, this.email, this.password, this.passwordRepeat];
    }

    init(){
        this.inputs.forEach( (el) => {
            this.checkFields(el);
        })
    }

    checkFields(inputName){
        switch(inputName.id){
            case 'name':
                if(inputName.value.length < 8 || inputName.value.length > 16){
                    this.addStyle(false, inputName, nameFail);
                }else{
                    this.addStyle(true, inputName, nameFail);
                }
                break;
            case 'email':
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if(re.test(inputName.value.trim())){
                    this.addStyle(true, inputName, emailFail);
                }else{
                    this.addStyle(false, inputName, emailFail);
                }
        }
    }

    addStyle(argument, input, pId){
        switch(argument){
            case true:
                input.classList.remove('failValidate');
                input.classList.add('successValidate');
                pId.style.display = 'none';
                break;
            case false:       
                input.classList.remove('successValidate');
                input.classList.add('failValidate');
                pId.style.display = 'flex';
                break;
        }
    }
}

