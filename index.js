const startGame = document.querySelector(".start-quiz-btn")
const intro = document.querySelector(".quiz-home-box")
const quizBox = document.querySelector(".quiz-box")
const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNum=document.querySelector(".current-question-num")
const showdesc = document.querySelector(".answer-description")
const nextQuestionBtn = document.querySelector(".next-qustion-btn")
const correctAnswers = document.querySelector(".correct-answers")
const quizEnd = document.querySelector(".see-result-btn");
const QuizOver = document.querySelector(".quiz-over-box");
const totalScore = document.querySelector(".total-score");
let questionIndex = 0;
let score= 0;
let number=0;

//questions and options and answer and answer description
//array of obejects
myApp=[
    {
        question:"What is the capital of Madagascar?",
        options: ["Antsiranana", "Mahajanga", "Antananarivo", "Toliara"],
        answer: 2,
        decription:""
    },
    {
        question: "What is my Favorite Color?",
        options: ["Brown", "Pink", "Black", "Orange"],
        answer: 2,
        decription: ""
    },
    {
        question: "Abidjan is located in what continent?",
        options: ["Europe", "Asia", "North America", "Africa"],
        answer: 3,
        decription: ""
    },
    {
        question: "Who is the President of South Korea?",
        options: ["Moon Jae-in", "Kim Jong-Un", "Roo Moo-hyun", "Hwang Kyo-ahn"],
        answer: 0,
        decription: ""
    },
    {
        question: "When did Nigeria gain Independence?",
        options: ["1960", "1963", "1970", "1969"],
        answer: 0,
            decription: ""
    },
]

startGame.addEventListener("click", start)


function start(){
    intro.classList.add("hide")
    quizBox.classList.remove("hide")
    load();
}
function load(){
    number++;
    questionText.innerHTML=myApp[questionIndex].question;
    createOptions();
    scoreBoard()
    currentQuestionNum.innerHTML=number + "/ " + myApp.length;
}

function createOptions(){
    optionBox.innerHTML="";
    for(let i=0; i < myApp[questionIndex].options.length; i++){
        const option=document.createElement("div");
        option.innerHTML = myApp[questionIndex].options[i];
        option.classList.add("option");
        option.id=i;
        option.setAttribute("onclick", "check(this)");
        optionBox.appendChild(option)
    }
}
function check(ele){
    const id=ele.id;
    if(id==myApp[questionIndex].answer){
    ele.classList.add("correct");
    score++;
    scoreBoard();
    } else {
        ele.classList.add("wrong");
    }

    disableOptions();
    /* showAnswerDescription(); */
    showNextQuestionBtn();
    
}

function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].removeAttribute("onclick")
    }
}

/* function showAnswerDescription(){
    showdesc.classList.remove("hide")
    showdesc.innerHTML=myApp[questionIndex].description;
} */

function showNextQuestionBtn(){
    if (number == myApp.length) {
        quizEnd.classList.remove("hide");
    }else{
    nextQuestionBtn.classList.remove("hide");
    }
}

function scoreBoard(){
    correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click", nextQuestion);
quizEnd.addEventListener("click", quizOver);


function nextQuestion(){
    questionIndex++
    load();
    nextQuestionBtn.classList.add("hide");
}

function quizOver(){
    quizBox.classList.add("hide");
    QuizOver.classList.remove("hide");
    totalScore.innerHTML = score;

}
/* if (number == myApp.length) {
    quizOver(); */
/* window.onload=()=>{
    load()
} */