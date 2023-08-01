window.onload = function(){
    
}

class Employee{
    init(){
        this.retirmentContribution = null;
        this.pensionContribution = null;
        this.sicknessContribution = null;
        this.workerSocialContributionSum = null;
        this.baseForHealthContribution = null;
        this.healthInsurance = null;
        this.advanceTax = null;
        this.healthContribution = null;
        this.finalEmployeeMoney = null;

        this.downloadDOMElements();
    }

    downloadDOMElements(){
        this.retirmentContribution = document.querySelector('.retirmentContribution');
        this.pensionContribution = document.querySelector('.pensionContribution');
        this.sicknessContribution = document.querySelector('.sicknessContribution');
        this.workerSocialContributionSum = document.querySelector('.workerSocialContributionSum');
        this.baseForHealthContribution = document.querySelector('.baseForHealthContribution');
        this.healthInsurance = document.querySelector('.healthInsurance');
        this.advanceTax = document.querySelector('advanceTax');
        this.healthContribution = document.querySelector('healthContribution');
        this.finalEmployeeMoney = document.querySelector('finalEmployeeMoney');
    }

    setValue(value){
        this.retirmentContribution.innerText = value;

    }

}

class Employer{
    init(){

    }
}

class Money{
    init(){
        this.salary = 0;
        this.input = null;
    }

    setSalary(){
        this.input = document.getElementById('value');
        this.input.addEventListener('input', (el) => {
            if(isNaN(el.target.value)) return;
            this.salary = el.target.value;
            employee.setValue(this.salary);
        })
    }
}

const money = new Money();
money.setSalary();

const employee = new Employee();
employee.init();

