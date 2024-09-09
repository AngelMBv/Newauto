// Array de preguntas y respuestas
var questions = [
    {
        question: "is/your/color/?/favorite/What",
        correctAnswer: "What is your favorite color?"
    },
    {
        question: "going/Are/you/where/?",
        correctAnswer: "Where are you going?"
    },
    {
        question: "best/your/Who/is/friend/?",
        correctAnswer: "Who is your best friend?"
    },
    {
        question: "birthday/When/is/your/?",
        correctAnswer: "When is your birthday?"
    },
    {
        question: "university/this/you/choose/did/Why/?",
        correctAnswer: "Why did you choose this university?"
    },
    {
        question: "guitar/the/do/how/play/you/?",
        correctAnswer: "How do you play the guitar?"
    },
    {
        question: "is/name/his/What/?",
        correctAnswer: "What is his name?"
    },
    {
        question: "speak/you/do/English/?",
        correctAnswer: "Do you speak English?"
    },
    {
        question: "to/When/does/go/bed/your/mother/?",
        correctAnswer: "When does your mother go to bed?"
    },
    {
        question: "is/Why/late/you/?",
        correctAnswer: "Why are you late?"
    },
    {
        question: "color/favorite/What/your/is/?",
        correctAnswer: "What is your favorite color?"
    },
    {
        question: "live/do/you/where/?",
        correctAnswer: "Where do you live?"
    },
    {
        question: "is/your/father/Who/?",
        correctAnswer: "Who is your father?"
    },
    {
        question: "work/does/he/What/?",
        correctAnswer: "What does he work?"
    },
    {
        question: "are/they/going/Where/?",
        correctAnswer: "Where are they going?"
    },
    {
        question: "is/What/name/his/?",
        correctAnswer: "What is his name?"
    },
    {
        question: "are/you/doing/What/?",
        correctAnswer: "What are you doing?"
    },
    {
        question: "is/your/What/name/?",
        correctAnswer: "What is your name?"
    },
    {
        question: "do/Where/live/you/?",
        correctAnswer: "Where do you live?"
    },
    {
        question: "from/Where/you/are/?",
        correctAnswer: "Where are you from?"
    },
    {
        question: "do/you/like/What/eat/to/?",
        correctAnswer: "What do you like to eat?"
    },
    {
        question: "going/Where/you/are/?",
        correctAnswer: "Where are you going?"
    },
    {
        question: "is/name/your/What/?",
        correctAnswer: "What is your name?"
    },
    {
        question: "is/How/old/your/mother/?",
        correctAnswer: "How old is your mother?"
    },
    {
        question: "is/your/Where/friend/best/from/?",
        correctAnswer: "Where is your best friend from?"
    },
    {
        question: "do/What/you/want/?",
        correctAnswer: "What do you want?"
    },
    {
        question: "is/What/his/name/?",
        correctAnswer: "What is his name?"
    },
    {
        question: "you/do/Where/live/?",
        correctAnswer: "Where do you live?"
    },
    {
        question: "doing/are/What/you/?",
        correctAnswer: "What are you doing?"
    },
    {
        question: "is/Why/late/he/?",
        correctAnswer: "Why is he late?"
    },
    {
        question: "is/What/job/your/mother's/?",
        correctAnswer: "What is your mother's job?"
    },
    {
        question: "doing/you/are/What/?",
        correctAnswer: "What are you doing?"
    },
    {
        question: "favorite/What/your/is/food/?",
        correctAnswer: "What is your favorite food?"
    },
    {
        question: "the/How/weather/is/today/?",
        correctAnswer: "How is the weather today?"
    },
    {
        question: "are/do/you/How/feel/?",
        correctAnswer: "How do you feel?"
    },
    {
        question: "doing/are/What/they/?",
        correctAnswer: "What are they doing?"
    },
    {
        question: "do/you/How/school/go/to/?",
        correctAnswer: "How do you go to school?"
    },
    {
        question: "to/you/are/going/Where/?",
        correctAnswer: "Where are you going to?"
    },
    {
        question: "did/how/you/What/today/feel/?",
        correctAnswer: "How did you feel today?"
    }
];
        // Función para desordenar palabras
        function shuffleWords(words) {
            return words.split('/').sort(function() {
                return 0.5 - Math.random();
            }).join(' ');
        }

        // Función para seleccionar preguntas aleatorias únicas
        function getRandomUniqueQuestions(array, n) {
            var shuffled = array.slice(); // Copia el array original
            var randomQuestions = [];
            for (var i = 0; i < n && i < shuffled.length; i++) {
                var randomIndex = Math.floor(Math.random() * shuffled.length);
                var randomQuestion = shuffled.splice(randomIndex, 1)[0]; // Extrae la pregunta aleatoria
                randomQuestions.push(randomQuestion);
            }
            return randomQuestions;
        }

        // Muestra las preguntas aleatorias al cargar la página
window.onload = function() {
    var randomQuestions = getRandomUniqueQuestions(questions, 10);
    var questionList = document.getElementById("question-list");
    var form = document.getElementById("question-form");

    // Limpiar la lista de preguntas existente
    questionList.innerHTML = '';

    var questionNumber = 1; // Inicializar el contador de pregunta

    // Iterar sobre las preguntas aleatorias y mostrarlas en el HTML
    randomQuestions.forEach(function(questionObj) {
        var scrambledQuestion = shuffleWords(questionObj.question);
        var listItem = document.createElement('li');
        listItem.textContent = questionNumber + ". " + scrambledQuestion; // Añadir número de pregunta
        questionNumber++; // Incrementar el contador de pregunta

        // Crear un campo de entrada para la respuesta
        var input = document.createElement('input');
        input.type = "text";
        input.name = "answer";
        listItem.appendChild(input);

        // Añadir un span para el icono de paloma (✔)
        var correctIcon = document.createElement('span');
        correctIcon.textContent = "✔";
        correctIcon.classList.add('icon', 'correct');
        listItem.appendChild(correctIcon);

        // Añadir un span para el icono de X (✘)
        var incorrectIcon = document.createElement('span');
        incorrectIcon.textContent = "✘";
        incorrectIcon.classList.add('icon', 'incorrect');
        listItem.appendChild(incorrectIcon);

        // Ocultar los iconos al principio
        correctIcon.style.display = "none";
        incorrectIcon.style.display = "none";

        // Añadir la pregunta y el campo de entrada al formulario
        questionList.appendChild(listItem);

        // Guardar la respuesta correcta en un atributo de datos
        listItem.setAttribute("data-correct-answer", questionObj.correctAnswer);
    });
};

        // Función para verificar la respuesta
        function checkAnswer() {
            var feedback = document.getElementById('feedback');
            var correctCount = 0;

            // Obtener todas las preguntas y respuestas
            var questionItems = document.querySelectorAll("#question-list li");
            questionItems.forEach(function(questionItem) {
                var userAnswer = questionItem.querySelector('input').value.trim();
                var correctAnswer = questionItem.getAttribute('data-correct-answer');

                // Comparar la respuesta del usuario con la respuesta correcta
                if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                    correctCount++;
                    questionItem.querySelector('.icon.correct').style.display = "inline";
                    questionItem.querySelector('.icon.incorrect').style.display = "none";
                } else {
                    questionItem.querySelector('.icon.correct').style.display = "none";
                    questionItem.querySelector('.icon.incorrect').style.display = "inline";
                }
            });

            // Mostrar el resultado final
            var totalQuestions = questionItems.length;
            var accuracy = (correctCount / totalQuestions) * 100;
            feedback.textContent = "You got " + correctCount + " out of " + totalQuestions + " questions correct. Accuracy: " + accuracy.toFixed(2) + "%";
            document.getElementById('result').style.display = "block";
        }

        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });