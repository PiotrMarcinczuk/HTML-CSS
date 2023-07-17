class Quiz{
    constructor(){
        this.questionList = [
            {question: 'Ile kg waży Sznyc?', answer1: 55, answer2: 88, answer3: 100, correctAnswer: answer2, flag: null},
            {question: 'Jak nazywa się Sznyc?', answer1: 'Wojtek', answer2: 'Karol', answer3: 'Bożydar', correctAnswer: answer1, flag: null}
        ]

        this.number = null;
    }

    getRandomNumber(){
        this.number = Math.floor(Math.random() * this.questionList.length);
    }

    getHtmlElements(){
        const title = document.querySelector('main h1')
        const a1 = document.getElementById('label_answer1')
        const a2 = document.getElementById('label_answer2')
        const a3 = document.getElementById('label_answer3')

        const questionTemp = this.getQuestion();
        
        title.innerHTML = questionTemp.question;
        a1.innerHTML = questionTemp.answer1;
        a2.innerHTML = questionTemp.answer2;
        a3.innerHTML = questionTemp.answer3;
    }

    getQuestion(){
        this.getRandomNumber();
        for(let [key, value] of this.questionList.entries()){
            
            if(key === this.number && value.flag === null){
                value.flag = true;
                return value;
            }
        }
    }
}

quiz = new Quiz();
quiz.getHtmlElements();

