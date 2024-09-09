const places = [
    { name: "museum", img: "img/v1/img1.jpg" },
    { name: "library", img: "img/v1/img2.png" },
    { name: "park", img: "img/v1/img3.jpg" },
    { name: "stadium", img: "img/v1/img4.jpg" },
    { name: "school", img: "img/v1/img5.jpeg" },
    { name: "hospital", img: "img/v1/img6.jpg" },
    { name: "cinema", img: "img/v1/img7.jpg" },
    { name: "restaurant", img: "img/v1/img8.jpg" },
    { name: "airport", img: "img/v1/img9.jpeg" },
    { name: "zoo", img: "img/v1/img10.jpeg" },
    { name: "church", img: "img/v1/img11.png" },
    { name: "bank", img: "img/v1/img12.png" },
    { name: "supermarket", img: "img/v1/img13.png" },
    { name: "bakery", img: "img/v1/img14.png" },
    { name: "hotel", img: "img/v1/img15.png" },
    { name: "factory", img: "img/v1/img16.png" },
    { name: "bus station", img: "img/v1/img17.png" },
    { name: "farm", img: "img/v1/img18.png" },
    { name: "post office", img: "img/v1/img19.png" },
    { name: "pharmacy", img: "img/v1/img20.png" },
    { name: "thearte", img: "img/v1/img21.png" },
    { name: "town hall", img: "img/v1/img22.png" },
    { name: "police station", img: "img/v1/img23.png" },
    { name: "train station", img: "img/v1/img24.png" }
];

let shuffledPlaces = [];
let currentPlace = 0;
let correctAnswers = 0;
const numPlacesToShow = 10; // Número de lugares que se deben mostrar

function shufflePlaces(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showPlace() {
    if (currentPlace < shuffledPlaces.length) {
        document.getElementById('placeImage').src = shuffledPlaces[currentPlace].img;
        document.getElementById('placeInput').value = '';
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('card').style.display = 'none';
    const resultMessage = `You got ${correctAnswers} out of ${shuffledPlaces.length} correct!`;
    document.getElementById('resultMessage').innerText = resultMessage;
    document.getElementById('result').style.display = 'flex';
}

function resetGame() {
    shuffledPlaces = shufflePlaces([...places]).slice(0, numPlacesToShow);
    currentPlace = 0;
    correctAnswers = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('card').style.display = 'flex';
    showPlace();
}

document.getElementById('submitBtn').addEventListener('click', () => {
    const userAnswer = document.getElementById('placeInput').value.toLowerCase().trim();
    if (userAnswer === shuffledPlaces[currentPlace].name.toLowerCase()) {
        correctAnswers++;
    }
    currentPlace++;
    showPlace();
});

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('instructions').style.display = 'none';
    shuffledPlaces = shufflePlaces([...places]).slice(0, numPlacesToShow);
    document.getElementById('card').style.display = 'flex';
    showPlace();
});

document.getElementById('retryBtn').addEventListener('click', resetGame);
