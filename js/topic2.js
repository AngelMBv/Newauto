const questions = [
    { question: "She _____ a teacher.", answer: "is" },
    { question: "They _____ my friends.", answer: "are" },
    { question: "She _____ an excellent cook.", answer: "is" },
    { question: "They _____ in the garden.", answer: "are" },
    { question: "He _____ a good listener.", answer: "is" },
    { question: "It _____ raining outside.", answer: "is" },
    { question: "You _____ the best!", answer: "are" },
    { question: "I _____ feeling tired today.", answer: "am" },
    { question: "We _____ excited about the trip.", answer: "are" },
    { question: "She _____ always on time.", answer: "is" },
    { question: "They _____ happy with the result.", answer: "are" },
    { question: "He _____ the owner of the company.", answer: "is" },
    { question: "It _____ a pleasure to meet you.", answer: "is" },
    { question: "You _____ a talented artist.", answer: "are" },
    { question: "We _____ looking forward to the event.", answer: "are" },
    { question: "She _____ the captain of the team.", answer: "is" },
    { question: "They _____ ready for the challenge.", answer: "are" },
    { question: "He _____ a great storyteller.", answer: "is" },
    { question: "It _____ getting late.", answer: "is" },
    { question: "You _____ my hero!", answer: "are" },
    { question: "I _____ sure about the decision.", answer: "am" },
    { question: "We _____ grateful for your help.", answer: "are" },
    { question: "She _____ a reliable source.", answer: "is" },
    { question: "They _____ in love.", answer: "are" },
    { question: "He _____ a talented musician.", answer: "is" },
    { question: "It _____ important to stay hydrated.", answer: "is" },
    { question: "You _____ such a good friend!", answer: "are" },
    { question: "I _____ ready for the challenge.", answer: "am" },
    { question: "We _____ a bit confused about the directions.", answer: "are" },
    { question: "She _____ my favorite actress.", answer: "is" },
    { question: "They _____ the winners of the competition.", answer: "are" },
    { question: "He _____ a loyal companion.", answer: "is" },
    { question: "It _____ not easy to learn a new language.", answer: "is" },
    { question: "You _____ a wonderful person.", answer: "are" },
    { question: "I _____ not sure what to do next.", answer: "am" },
    { question: "We _____ always there for each other.", answer: "are" },
    { question: "She _____ the best dancer in the group.", answer: "is" },
    { question: "They _____ not happy with the service.", answer: "are" },
    { question: "He _____ a true gentleman.", answer: "is" }
];

const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const checkAnswersBtn = document.getElementById('checkAnswers');
const resultMessage = document.getElementById('results');

document.getElementById('openModal').addEventListener('click', () => {
    modal.style.display = 'block';
    clearModalInputs();
    showRandomQuestions();
});

function clearModalInputs() {
    document.getElementById('questionsContainer').innerHTML = '';
    resultMessage.textContent = '';
}

function closeModal() {
    modal.style.display = 'none';
    clearModalInputs();
}

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

checkAnswersBtn.addEventListener('click', () => {
    // Verifica las respuestas y muestra el mensaje de resultado
});

let randomIndexes = [];

function showRandomQuestions() {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; // Limpiar preguntas anteriores
    randomIndexes = getRandomIndexes(questions.length, 10);
    randomIndexes.forEach((index, i) => {
        const question = questions[index];
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-container');
        const questionText = document.createElement('span');
        questionText.textContent = question.question;
        questionDiv.appendChild(questionText);
        const answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'text');
        answerInput.setAttribute('id', `answer${i}`); // Asignar un ID único
        answerInput.classList.add('answer-input');
        questionDiv.appendChild(answerInput);
        questionsContainer.appendChild(questionDiv);
    });
}


function getRandomIndexes(max, count) {
    const indexes = [];
    while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes;
}

checkAnswersBtn.addEventListener('click', () => {
    let score = 0;
    resultMessage.innerHTML = ''; // Limpiar resultados anteriores
    document.querySelectorAll('.feedback-span').forEach(element => element.remove()); // Limpiar las palomas y las X anteriores

    randomIndexes.forEach((index, i) => {
        const question = questions[index];
        const answerInput = document.getElementById(`answer${i}`);
        const feedbackSpan = document.createElement('span');
        feedbackSpan.classList.add('feedback-span'); // Agregar clase para identificar los elementos de retroalimentación

        // Comparar la respuesta ignorando mayúsculas y espacios en blanco
        if (answerInput.value.trim().toLowerCase() === question.answer.toLowerCase()) {
            score++;
            feedbackSpan.innerHTML = '<span style="color:green;">&#x2705;</span>'; // Paloma verde
        } else {
            feedbackSpan.innerHTML = '<span style="color:red;">&#x274c;</span>'; // X roja
        }

        // Agregar el feedback al lado del input
        answerInput.insertAdjacentElement('afterend', feedbackSpan);
    });

    resultMessage.innerHTML = `Your score: ${score}/10`; // Muestra la puntuación sobre el total de preguntas mostradas
});


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});