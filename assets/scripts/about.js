// Chargement des sections de la page about
showSection();
window.addEventListener('hashchange', showSection);
function showSection() {
    const sectionToShow = window.location.hash;
    if (sectionToShow) {
        const allSections = document.querySelectorAll('section.about');
        allSections.forEach(sections => {
            sections.classList.remove('active-section');
        });
        const allIconAbout = document.querySelectorAll('.icoAbout div');
        allIconAbout.forEach(iconsAbout => {
            iconsAbout.classList.remove('active-icon');
        });
        // Afficher uniquement la section correspondante
        const section = document.querySelector(sectionToShow);
        if (section) {
            section.classList.add('active-section');
        }
    }
}

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



// document.addEventListener('DOMContentLoaded', function () {})
var mvs = document.getElementsByClassName('titresMV');

// Convertir en tableau pour utiliser forEach
Array.from(mvs).forEach(lists => {
    lists.addEventListener('click', function (event) {
        lists.classList.toggle('tooglemv');
    });
});

console.log(mvs);