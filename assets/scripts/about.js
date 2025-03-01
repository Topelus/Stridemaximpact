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
        const allIconAbout = document.querySelectorAll('.icoAbout a');
        allIconAbout.forEach(iconsAbout => {
            iconsAbout.classList.remove('active-icon');
        });
        // Afficher uniquement la section correspondante
        const section = document.querySelector(sectionToShow);
        if (section) {
            section.classList.add('active-section');
        }

        const lien = document.querySelector(`a[href="${sectionToShow}"]`);

        // Vérifier si le lien a été trouvé et agir
        if (lien) {
            lien.classList.add('active-icon');
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


const partners = document.querySelectorAll(".partenaires span");
partners.forEach((partner) => {
    const link = partner.querySelector("a");
    const infoBox = document.querySelector(".info-box");

    link.addEventListener("click", (e) => {
        e.preventDefault();


        // Affiche le texte dans la boîte
        infoBox.textContent = link.getAttribute("data-text");
        console.log(link.getAttribute("data-text"));
        setTimeout(() => {
            infoBox.textContent = "";
        }, 5000);
    });
});








// Récupérer le menu déroulant et les éléments
const filter = document.getElementById('filter');
const items = document.querySelectorAll('.expertise-item');

// Ajouter un écouteur d'événement pour le changement de sélection
filter.addEventListener('change', () => {
    const category = filter.value;

    // Parcourir les éléments et appliquer le filtre
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block'; // Afficher l'élément
        } else {
            item.style.display = 'none'; // Masquer l'élément
        }
    });
});

// Afficher tous les éléments par défaut
filter.dispatchEvent(new Event('change'));

