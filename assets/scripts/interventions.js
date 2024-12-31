// Page interventions

// Menu burger
var menu = document.getElementById("menu");
var openBtn = document.getElementById("openMenu");
var openMainMenus = document.querySelectorAll('#menu .main-menus');
openBtn.addEventListener('click', function (event) {
    menu.classList.toggle('active-menu');
    openBtn.classList.toggle('closeMenu');
})

openMainMenus.forEach(mainMenu => {
    mainMenu.addEventListener('click', function (event) {
        if (mainMenu.classList.contains('active-mainMenu')) {
            mainMenu.classList.toggle('active-mainMenu');
        } else {
            openMainMenus.forEach(mainMenus => {
                mainMenus.classList.remove('active-mainMenu');
            });
            mainMenu.classList.toggle('active-mainMenu');
        }
    });
});


const arrowleft = document.querySelector('.swipe.left');
const arrowright = document.querySelector('.swipe.right');

var backgroundContainer = document.querySelector('.img_Interv');
var images = [
    'url("assets/images/pexels-fauxels-3183150.webp")',
    'url("assets/images/reading-glasses-piles-coins-high-view.webp")',
    'url("assets/images/pexels-fauxels-3183150.webp")',
    'url("assets/images/reading-glasses-piles-coins-high-view.webp")'
];

var currentIndex = 0;

// function changeImage() {
//     // Change image
//     backgroundContainer.style.backgroundImage = images[currentIndex];
// }
// Initial call to set the first background image
// changeImage()
showSection();
window.addEventListener('hashchange', showSection);
function showSection() {
    const sectionToShow = window.location.hash;
    if (sectionToShow) {
        const allSections = document.querySelectorAll('.active-interv');
        allSections.forEach(sections => {
            sections.classList.remove('active-interv');
        });
        const allIconInterv = document.querySelectorAll('.Interv-ico a');
        allIconInterv.forEach(iconsInterv => {
            iconsInterv.classList.remove('active-icon-interv');
        });
        // Afficher uniquement la section correspondante
        const interv = document.querySelector(sectionToShow);
        if (interv) {
            interv.classList.add('active-interv');
        }

        const lien = document.querySelector(`a[href="${sectionToShow}"]`); 

        // Vérifier si le lien a été trouvé et agir
        if (lien) {
            lien.classList.add('active-icon-interv');
        }
    }
}


// arrowright.addEventListener('click', () => {
//     let cards = document.querySelectorAll('.intervention');
//     document.querySelector('#interventions').appendChild(cards[0]);
//     currentIndex = (currentIndex + 1) % images.length;
//     changeBackgroundImage();
// });

// arrowleft.addEventListener('click', () => {
//     let cards = document.querySelectorAll('.intervention');
//     document.querySelector('#interventions').prepend(cards[cards.length - 1]);
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     changeBackgroundImage();
// });