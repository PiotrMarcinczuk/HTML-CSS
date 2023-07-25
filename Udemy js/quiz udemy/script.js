window.onload = function(){
    quiz.init();
}

class Quiz{
    questions = [
        {q: 'Ile to jest 10 / 2?', answers: ['4','5','6','7.5'], correctAnswerNum: 1},
        {q: 'Ile to jest 16 + 2?', answers: ['5','20','18'], correctAnswerNum: 2}
    ];

    currentQuestionIndex = -1;
    heading = null;
    questionParagraph = null;
    answer0 = null;
    answer1 = null;
    answer2 = null;
    correctAnswerNum = null;

    userSelectedInput = null;
    userCorrectAnswersNum = 0;
    userBadAnswersNum = 0;
    saveAnswerButton = null;
    nextQuestionButton = null;

    init(){
        this.heading = document.querySelector('.alert-heading');
        this.answer0 = 

    }
}

const quiz = new Quiz();