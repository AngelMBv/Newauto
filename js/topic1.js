var questionsAndAnswers = [
    { question: "She is a doctor.", answers: ["they", "he", "she"], correctAnswer: "she" },
    { question: "Can you come to the party?", answers: ["him", "you", "us"], correctAnswer: "you" },
    { question: "This is for us.", answers: ["they", "you", "us"], correctAnswer: "us" },
    // Agrega más preguntas aquí
    { question: "He sings beautifully.", answers: ["he", "she", "they"], correctAnswer: "he" },
    { question: "I want <b>her</b> to join us.", answers: ["subject pronoun", "object pronoun"], correctAnswer: "object pronoun" },
    { question: "We saw him at the store.", answers: ["him", "he", "us"], correctAnswer: "him" },
    { question: "They are going to the beach.", answers: ["us", "they", "him"], correctAnswer: "they" },
    { question: "Can you give them the book?", answers: ["they", "him", "her"], correctAnswer: "them" },
    { question: "He is a good swimmer.", answers: ["she", "he", "we"], correctAnswer: "he" },
    { question: "We met them at the party.", answers: ["us", "they", "it"], correctAnswer: "them" },
    { question: "She is a talented musician.", answers: ["she", "he", "it"], correctAnswer: "she" },
    { question: "We won the game.", answers: ["they", "we", "it"], correctAnswer: "we" },
    { question: "Can she swim?", answers: ["we", "she", "it"], correctAnswer: "she" },
    { question: "They called him for help.", answers: ["her", "him", "they"], correctAnswer: "him" },
    { question: "We love to play soccer.", answers: ["he", "we", "they"], correctAnswer: "we" },
    { question: "He won the race.", answers: ["he", "she", "it"], correctAnswer: "he" },
    { question: "Can you help her with the homework?", answers: ["she", "they", "we"], correctAnswer: "her" },
    { question: "We are going to the movies.", answers: ["we", "it", "they"], correctAnswer: "we" }
];

// Obtén elementos DOM
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementById("closeModalBtn");
var activityDiv = document.getElementById("activity");
var resultMessage = document.getElementById("resultMessage");
var checkBtn = document.getElementById("checkAnswersBtn");
var userGradeDiv = document.getElementById("userGrade");

// Manejador de evento para abrir el modal
btn.onclick = function() {
    generateQuestions();
    modal.style.display = "block";
}

// Manejador de evento para cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
    clearResults();
}

// Genera las preguntas de forma aleatoria
function generateQuestions() {
    // Reinicia los resultados
    clearResults();
    // Baraja el arreglo de preguntas y respuestas
    var shuffledQuestions = shuffleArray(questionsAndAnswers);
    // Limita a 10 preguntas
    shuffledQuestions = shuffledQuestions.slice(0, 10);
    // Genera el HTML para las preguntas
    var html = "";
    shuffledQuestions.forEach(function(item, index) {
        var shuffledAnswers = shuffleArray(item.answers);
        html += '<div class="question">' + (index + 1) + '. ' + item.question + ' <select class="pronoun-select" id="pronoun' + (index + 1) + '">';
        html += '<option></option>';
        shuffledAnswers.forEach(function(answer) {
            html += '<option value="' + answer + '">' + answer + '</option>';
        });
        html += '</select><span class="result" id="result' + (index + 1) + '"></span></div>';
    });
    activityDiv.innerHTML = html;
}

// Baraja un arreglo
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Limpia los resultados
function clearResults() {
    resultMessage.textContent = "";
    var results = document.querySelectorAll('.result');
    results.forEach(function(result) {
        result.textContent = "";
        result.classList.remove("correct", "incorrect");
    });
    userGradeDiv.textContent = "";
}

// Manejador de evento para verificar respuestas
checkBtn.onclick = function() {
    var correctCount = 0;
    var questions = document.querySelectorAll('.question');
    questions.forEach(function(question, index) {
        var select = question.querySelector('.pronoun-select');
        var result = question.querySelector('.result');
        var selectedAnswer = select.value;
        var correctAnswer = questionsAndAnswers[index].correctAnswer;
        if (selectedAnswer === correctAnswer) {
            result.textContent = '✔️';
            result.classList.add("correct");
            correctCount++;
        } else {
            result.textContent = '❌';
            result.classList.add("incorrect");
        }
    });
    var totalQuestions = questions.length;
    if (correctCount === totalQuestions) {
        resultMessage.textContent = "All the answers are correct!";
        resultMessage.classList.add("correct");
    } else {
        resultMessage.textContent = "At least one answer is incorrect. Review them.";
        resultMessage.classList.add("incorrect");
    }
    // Calcula la calificación y la muestra
    var grade = (correctCount / totalQuestions) * 100;
    userGradeDiv.textContent = "Your grade: " + grade.toFixed(2) + "%";
};

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
