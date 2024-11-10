// Page interventions
const arrowleft=document.querySelector('.swipe.left');
const arrowright=document.querySelector('.swipe.right');

const sectionToShow = window.location.hash;

var backgroundContainer = document.querySelector('.parralax-header.Interventions');
const banner = document.querySelector('.banntext');
var images = [
    'url("assets/images/pexels-fauxels-3183150.webp")',
    'url("assets/images/reading-glasses-piles-coins-high-view.webp")',
    'url("assets/images/pexels-fauxels-3183150.webp")',
    'url("assets/images/reading-glasses-piles-coins-high-view.webp")'

];
const texts = [
    "<h1>Dévelopement de PMEs</h1>",
    "<h1>Etudes, Recherche & Formations</h1>",
    "<h1>Gouvernance, Management & Leadership</h1>",
    "<h1>Télécommunications, Communications & Evenementiels</h1>",
];

var currentIndex = 2;

function changeBackgroundImage() {
    // Change the background image
    backgroundContainer.style.backgroundImage = images[currentIndex];
    // Update the index, and loop back to the start if necessary
    banner.innerHTML = texts[currentIndex];
}
// Initial call to set the first background image
changeBackgroundImage();



arrowright.addEventListener('click', () => {
    let cards = document.querySelectorAll('.intervention');
    document.querySelector('#interventions').appendChild(cards[0]);
    currentIndex = (currentIndex + 1) % images.length;
    changeBackgroundImage();
});

arrowleft.addEventListener('click', () => {
    let cards = document.querySelectorAll('.intervention');
    document.querySelector('#interventions').prepend(cards[cards.length - 1]);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeBackgroundImage();
});

console.log(currentIndex);