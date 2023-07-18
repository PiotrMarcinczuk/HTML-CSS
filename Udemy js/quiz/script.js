const title = document.querySelector('main h1')

const a1 = document.querySelector('label[for="answer1"]')
const a2 = document.querySelector('label[for="answer2"]')
const a3 = document.querySelector('label[for="answer3"]')

const button = document.querySelector('#quiz-box button');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const labels = document.querySelectorAll('label');

class Quiz{
    constructor(){
        const answers = new Answers();
        this.questionList = [
            {question: 'Ile kg waży Sznyc?', answer1: 55, answer2: answers.answer1, answer3: 100, correctAnswer: answers.answer1, flag: false},
            {question: 'Jak nazywa się Sznyc?', answer1: answers.answer2, answer2: 'Karol', answer3: 'Bożydar', correctAnswer: answers.answer2, flag: false},
            {question: 'Jak na imię miał Jan Paweł II?', answer1: 'Magdalena', answer2: 'Jan', answer3: answers.answer3, correctAnswer: answers.answer3, flag: false}
        ]
        this.inputId = null;
        this.labelName = null;
        this.questionNumber = null;
    }

    getRandomNumber(len){
        return Math.floor(Math.random() * len);
    }

    getHtmlElements(){
        let questionTemp = this.getQuestion();
        
        title.innerHTML = questionTemp.question;
        a1.innerHTML = questionTemp.answer1;
        a2.innerHTML = questionTemp.answer2;
        a3.innerHTML = questionTemp.answer3;
    }

    getQuestion(){  
        let unanswered = this.questionList.filter( (e) => !e.flag)
        if(unanswered.length <= 1){
            button.setAttribute('disabled', 'true');
        }
        let index = this.getRandomNumber(unanswered.length);
        let question = unanswered[index];
        question.flag = true;
        this.questionNumber += 1;
        return question;
    }

    nextQuestion(){
        quiz.getHtmlElements();
        quiz.clearCheckbox();
    }

    clearCheckbox(){
        checkboxes.forEach( (el) => {
            el.checked = false;
        })
    }

    checkAnswer(){
        let correct = quiz.questionList[quiz.questionNumber-1].correctAnswer;
        console.log(correct)
    }
}

class Answers{
    constructor(){
        this.answer1 = 88;
        this.answer2 = 'Wojtek';
        this.answer3 = 'Karol';
    }
}

quiz = new Quiz();

quiz.getHtmlElements();

checkboxes.forEach( el => { // cos zle z kolejnosci odpowiedzi wypisywanych
    el.addEventListener('click', () => {
        if(el.checked){
            const label = document.querySelector(`label[for="${el.id}"]`);
            quiz.labelName = label.innerText;
        }
    })
})

button.addEventListener('click', quiz.nextQuestion);
button.addEventListener('click', quiz.checkAnswer);







