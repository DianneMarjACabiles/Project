const questions = [
    {
        question: "What is gender equality?",
        answers: ["Women will do world domination", "Men should lead", "Equality regardless of gender", "Not discriminating races"],
        correct: "Equality regardless of gender"
    },
    {
        question: "What is the type of tax that makes products marketed to women more expensive?",
        answers: ["Luxury tax", "Pink tax", "Sales tax", "Fanum tax"],
        correct: "Pink tax"
    },
    {
        question: "What is one of the reasons we should support gender equality?",
        answers: ["More jobs for men only", "Freedom of expression", "It is unnecessary", "To be superior"],
        correct: "Freedom of expression"
    },
    {
        question: "What does freedom of expression mean?",
        answers: ["Freedom to express yourself how you want regardless of gender", "Only men can speak and no one else should be allowed", "Women can't speak", "Being freely evil"],
        correct: "Freedom to express yourself how you want regardless of gender"
    },
    {
        question: "Will gender equality help our society?",
        answers: ["Yes, it's beneficial for all!", "No, it is a myth", "Everyone should be against it", "Only for women"],
        correct: "Yes, it's beneficial for all!"
    }
];

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-buttn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resetQuestion();
    nextButton.style.display = "none"; 
    showQuestion();
}

function showQuestion() {
    resetQuestion();
    let currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = currentQuestion.question;

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        let button = document.createElement("button");
        button.innerHTML = currentQuestion.answers[i];
        button.className = "buttn"; 
        button.onclick = function() { selectAnswer(button, currentQuestion.correct); }; 
        answerButtons.appendChild(button);
    }
}

function resetQuestion() {
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
}

function selectAnswer(button, correctAnswer) {
    const selectedAnswer = button.innerHTML;
    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    for (let i = 0; i < answerButtons.children.length; i++) {
        answerButtons.children[i].disabled = true;
    }

    nextButton.style.display = "block";
}


nextButton.onclick = function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    resetQuestion();
    questionContainer.innerHTML = `You have completed the quiz! Your score: ${score}/${questions.length}`;
}

startQuiz();
