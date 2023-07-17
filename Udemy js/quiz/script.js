const title = document.querySelector('main h1')
const a1 = document.getElementById('label_answer1')
const a2 = document.getElementById('label_answer2')
const a3 = document.getElementById('label_answer3')

const button = document.querySelector('#quiz-box button');

class Quiz{
    constructor(){
        this.questionList = [
            {question: 'Ile kg waży Sznyc?', answer1: 55, answer2: 88, answer3: 100, correctAnswer: answer2, flag: false},
            {question: 'Jak nazywa się Sznyc?', answer1: 'Wojtek', answer2: 'Karol', answer3: 'Bożydar', correctAnswer: answer1, flag: false},
            {question: 'Jak na imię miał Jan Paweł II?', answer1: 'Magdalena', answer2: 'Jan', answer3: 'Karol', correctAnswer: answer3, flag: false}

        ]
    }

    getRandomNumber(len){
        return Math.floor(Math.random() * len);
    }

    getHtmlElements(){
        let questionTemp = this.getQuestion();
        console.log(questionTemp);
        console.log(this.number);
        
        title.innerHTML = questionTemp.question;
        a1.innerHTML = questionTemp.answer1;
        a2.innerHTML = questionTemp.answer2;
        a3.innerHTML = questionTemp.answer3;
    }

    getQuestion(){  
        let unanswered = this.questionList.filter( (e) => !e.flag)
        if(unanswered.length === 0){
            this.getRandomNumber();
            return this.getQuestion()
        }

        let index = this.getRandomNumber(unanswered.length);
        let question = unanswered[index];
        question.flag = true;
        return question;
    }

    nextQuestion(){
        quiz.getHtmlElements();
        quiz.clearCheckbox();
    }

    clearCheckbox(){
        const checkbox = document.querySelectorAll('input[type="checkbox"]');
        checkbox.forEach( (el) => {
            el.checked = false;
        })
   
    }
}

quiz = new Quiz();
quiz.getHtmlElements();
button.addEventListener('click', quiz.nextQuestion);

