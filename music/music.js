const audio =
[
    {
        title: "Baroque Music - Bach's Suite in C minor, Sarabande - Arranged for Piano",
        sound: "bach.mp3",
    },

    {
        title: "Classical Music - Mozart's String Quartet No. 15 In D Minor - I. Allegro Moderato",
        sound: "mozart.mp3",
    },

    {
        title: "Romantic Music - Schumann's Fantasie in C, Op. 17",
        sound: "schumann.mp3",
    },

    {
        title: "Romantic/Contemporary - Debussy's Cello Sonata - I. Prologue - Lent",
        sound: "debussy.mp3",
    },

    { 
        title: "Classical/Romantic - Beethoven's Egmont Overture Op. 84",
        sound: "beethoven.mp3",
    },

    { 
        title: "Romantic - Brahms's Waltz No. 02 in E major",
        sound: "brahms.mp3",
    }

    
]


const concertImg = document.querySelector(".musicImg")
const modal = document.querySelector('dialog');


const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

console.log(document.querySelector(".musicImg"));
concertImg.addEventListener('click', openModal);

function openModal(event) {
    console.log(event.target.src);
    let imageSrc = event.target.src;

    modalImage.src = imageSrc.replace("small", "big");
    modal.showModal();
}
    console.log(closeButton)
    closeButton.addEventListener('click', () => {
    modal.close();
    });



const searchButton = document.getElementById("searchbar");
const searchInput = document.getElementById("search");
const card = document.getElementById("card");
let randomNum = Math.floor(Math.random() * 4);

function result() {

    let audioQuery = searchInput.value.toLowerCase();

    let filteredAudio = audio.filter(function(audio) {
        return audio.title.toLowerCase().includes(audioQuery);
    });

    card.innerHTML = "";

    filteredAudio.forEach(function(audio) {
        renderAudio(audio);
    });
}

searchButton.addEventListener("click", result);

function audioCard(audio) {
    return `
        <audio controls>
            <source src="${audio.sound}" type="audio/mpeg">
        </audio>

        <h2>${audio.title}</h2>
    `;
}

function renderAudio(audio) {
    card.innerHTML += audioCard(audio);
}

function init() {
    renderAudio(audio[randomNum]);
}

init();
