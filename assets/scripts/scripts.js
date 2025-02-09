// Modification du header
window.onscroll = function () {
    var header = document.getElementById("navigation");
    if (window.pageYOffset > 90) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

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


// Modification hero barner
var backgroundContainer = document.querySelector('.parralax-header.home');
const banner = document.getElementById('banntext');
var images = [
    { webp: 'assets/images/bannpic.webp', fallback: 'assets/images/bannpic.jpg' },
    { webp: 'assets/images/stacking-wooden-blocks-is-risk-creating-business-growth-ideas.webp', fallback: 'assets/images/stacking-wooden-blocks-is-risk-creating-business-growth-ideas.jpg' },
    { webp: 'assets/images/open-book-with-light-bulb-_1.webp', fallback: 'assets/images/open-book-with-light-bulb-_1.jpg' },
    { webp: 'assets/images/pexels-padrinan-194094.webp', fallback: 'assets/images/pexels-padrinan-194094.jpg' },
    { webp: 'assets/images/man-wearing-smart-glasses.webp', fallback: 'assets/images/man-wearing-smart-glasses.jpg' }

];
const texts = [
    `<h1>Bienvenue à <span style="color: #186cfb;">Stride</span></h1>
    <p>Architecte du progrès, nous embrassons la diversité en catalysant l'innovation pour bâtir un monde où chaque interaction crée une opportunité de croissance, de prospérité et de partage.</br></br><a href="#contact" class="ctaBann"> Commencez dès aujourd'hui <i class="fa fa-arrow-right"></i></a></p>`,

    `<h1>Booster la croissance de votre entreprise</h1>
    <p>Nous vous accompagnons avec des solutions sur mesure pour faire grandir votre PME et assurer sa pérennité. Ensemble, développons l'avenir de votre entreprise!</br></br><a href="#contact" class="ctaBann"> Commencez dès aujourd'hui <i class="fa fa-arrow-right"></i></a></p>`,

    `<h1>L'Excellence par la Connaissance</h1>
    <p>Explorer de nouvelles perspectives à partir des études,recherches et formations approfondies pour être à la pointe de l'innovation et de la technologie.</br></br><a href="#contact" class="ctaBann"> Commencez dès aujourd'hui <i class="fa fa-arrow-right"></i></a></p>`,

    `<h1>Renforcer votre Leadership</h1>
    <p>Optimiser la gouvernance et stimuler le management de votre organisation pour des performances accrues, basées sur les meilleures pratiques et un leadership fort.</br></br><a href="#contact" class="ctaBann"> Commencez dès aujourd'hui <i class="fa fa-arrow-right"></i></a></p>`,

    `<h1>Connecter, Communiquer et Captiver</h1>
    <p>Créer des connections fortes et des événements mémorables avec nos solutions intégrées en télécommunications et communication. Nous vous aidons à toucher votre audience de manière durable et percutante.</br></br><a href="#contact" class="ctaBann"> Commencez dès aujourd'hui <i class="fa fa-arrow-right"></i></a></p>`,
];


var currentIndex = 0;
var dots = document.querySelectorAll('.banndots span');

function supportsWebP(callback) {
    const img = new Image();
    img.onload = () => callback(true);  // Si l'image charge, WebP est pris en charge
    img.onerror = () => callback(false); // Sinon, WebP n'est pas pris en charge
    img.src = 'data:image/webp;base64,UklGRhYAAABXRUJQVlA4TAYAAAAvAAAAAAnbEAAQAAAAwAAAnAA/vvUAAA=';
  }
  
function changeBackgroundImage() {
    supportsWebP((isSupported) => {
        // Mettre à jour l'URL d'image pour chaque élément dans le tableau en fonction du support WebP
        const updatedImages = images.map(image => isSupported ? `url("${image.webp}")` : `url("${image.fallback}")`);

        // Mettre à jour l'image de fond pour le conteneur en fonction de l'indice actuel
        backgroundContainer.style.backgroundImage = updatedImages[currentIndex];

        // Mettre à jour le texte de la bannière
        banner.innerHTML = texts[currentIndex];

        // Gérer les points d'indication (dots)
        dots.forEach((dot, indexs) => {
            dot.classList.toggle("active_dot", indexs === currentIndex);
        });

        // Mettre à jour l'indice actuel et revenir au début si nécessaire
        currentIndex = (currentIndex + 1) % images.length;
    });
}



// Convertir en tableau pour utiliser forEach
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        changeBackgroundImage();
    });
});

// Initial call to set the first background image
changeBackgroundImage();
// Change the background every 10 seconds (10000 milliseconds)
setInterval(changeBackgroundImage, 15000);

// const loader = document.querySelector('.loader');
// window.addEventListener('load', () => {
//     loader.classList.add('loader-out')
// });



// document.addEventListener('DOMContentLoaded', function () {
//     var intervention = document.getElementsByClassName('intervention');

//     // Convertir en tableau pour utiliser forEach
//     Array.from(intervention).forEach(inter => {
//         inter.addEventListener('click', function (event) {
//             inter.classList.toggle('tooglemv');
//         });
//     });

// });


