const quizData = [
    {
        question: 'What is the capital of India ?',
        a: "Delhi",
        b: "Mumbai",
        c: "Bangalore",
        d: "Chennai",
        correct: 'a'
    },
    {
        question: 'How many runs are required to score a century?',
        a: 10,
        b: 100,
        c: 50,
        d: 200,
        correct: 'b'
    },
    {
        question: 'What is the currency of India ?',
        a: "Rubel",
        b: "Yuan",
        c: "Rupee",
        d: "Dollar",
        correct: 'c'
    },
    
];

const answers = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')

let currentQuestion = 0;
let correctCount = 0;
let score = 0;

function loadQuiz() {
    
    deselectAnswers()
    const {
        question,
        a,
        b,
        c,
        d
    } = quizData[currentQuestion]
    document.getElementById("question").innerHTML = question
    document.getElementById("a_text").innerText = a
    document.getElementById("b_text").innerText = b
    document.getElementById("c_text").innerText = c
    document.getElementById("d_text").innerText = d
}

function deselectAnswers(){
    answers.forEach(answer => answer.checked = false)
}

function getSelected(){
    let ans = undefined;
    answers.forEach((answer) => {
        if(answer.checked) {
            ans = answer.id
        }
    })
    return ans;
}

document.getElementById("submit")
.addEventListener("click",function() {
    const answerSelected = getSelected()

    if(answerSelected){
        if(answerSelected === quizData[currentQuestion].correct) {
            score++
        };
        currentQuestion++;
        if(currentQuestion<quizData.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `
                <h2>Your score : ${score}/${quizData.length}</h2>
                <button onclick = 'location.reload()'>Play Again</button>
            `
        }
    }else {

    }
});

loadQuiz();