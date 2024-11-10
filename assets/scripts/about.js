// Chargement des sections de la page about
const sectionToShow = window.location.hash;

if (sectionToShow) {
    const allSections = document.querySelectorAll('section.about');
    allSections.forEach(sections => {
        sections.classList.remove('active-section');
    });
    // Afficher uniquement la section correspondante
    const section = document.querySelector(sectionToShow);
    if (section) {
        section.classList.add('active-section');
    }
}
console.log(sectionToShow);

document.addEventListener('DOMContentLoaded', function () {
    var mvs = document.getElementsByClassName('ourMVs');

    // Convertir en tableau pour utiliser forEach
    Array.from(mvs).forEach(lists => {
        lists.addEventListener('click', function (event) {
            lists.classList.toggle('tooglemv');
        });
    });

    // Replier le menu si la souris quitte et qu'il n'a pas été cliqué
    mvs.addEventListener('mouseleave', function () {
        if (!menuContainer.classList.contains('tooglemv')) {
            menuContainer.classList.remove('tooglemv');
        }
    });
});