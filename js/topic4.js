const exercises = [
    { sentence: "She ___ two eyes.", answer: "has" },
    { sentence: "I ___ a brother.", answer: "have" },
    { sentence: "They ___ a new house.", answer: "have" },
    { sentence: "He ___ got a new job.", answer: "has" },
    { sentence: "We ___ a car.", answer: "have" },
    { sentence: "You ___ a good idea.", answer: "have" },
    { sentence: "She ___ got a pet cat.", answer: "has" },
    { sentence: "He ___ many friends.", answer: "has" },
    { sentence: "They ___ got a new phone.", answer: "have" },
    { sentence: "I ___ got a bicycle.", answer: "have" },
    { sentence: "We ___ got a garden.", answer: "have" },
    { sentence: "You ___ an interesting book.", answer: "have" },
    { sentence: "She ___ a beautiful smile.", answer: "has" },
    { sentence: "He ___ got a new car.", answer: "has" },
    { sentence: "They ___ a big family.", answer: "have" },
    { sentence: "I ___ got some questions.", answer: "have" },
    { sentence: "We ___ a lot of work to do.", answer: "have" },
    { sentence: "You ___ got a nice house.", answer: "have" },
    { sentence: "She ___ got a lot of talent.", answer: "has" },
    { sentence: "He ___ a computer.", answer: "has" },
    { sentence: "They ___ got a dog.", answer: "have" },
    { sentence: "I ___ got a pair of shoes.", answer: "have" },
    { sentence: "We ___ got a lot of friends.", answer: "have" },
    { sentence: "You ___ got a lot of homework.", answer: "have" },
    { sentence: "She ___ got a beautiful voice.", answer: "has" }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuiz() {
    const quizForm = document.getElementById('quizForm');
    const selectedExercises = shuffle(exercises).slice(0, 10);
    
    selectedExercises.forEach((exercise, index) => {
        const div = document.createElement('div');
        div.className = 'exercise';
        div.innerHTML = `<label>${index + 1}. ${exercise.sentence.replace('___', `<input type="text" name="q${index}">`)}</label>`;
        quizForm.appendChild(div);
    });

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Submit';
    button.onclick = checkAnswers;
    quizForm.appendChild(button);
}

function checkAnswers() {
    const quizForm = document.getElementById('quizForm');
    const inputs = quizForm.querySelectorAll('input');
    let score = 0;
    inputs.forEach((input, index) => {
        const answer = exercises[index].answer.toLowerCase();
        if (input.value.toLowerCase() === answer) {
            score++;
        }
    });

    const resultText = `You got ${score} out of 10 correct.`;
    document.getElementById('result').innerText = resultText;
}

window.onload = generateQuiz;