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
    'url("assets/images/bannpic.webp")',
    'url("assets/images/stacking-wooden-blocks-is-risk-creating-business-growth-ideas.webp")',
    'url("assets/images/open-book-with-light-bulb-_1.webp")',
    'url("assets/images/pexels-padrinan-194094.webp")',
    'url("assets/images/man-wearing-smart-glasses.webp")'

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

function changeBackgroundImage() {
    // Change the background image
    backgroundContainer.style.backgroundImage = images[currentIndex];
    // Update the index, and loop back to the start if necessary
    banner.innerHTML = texts[currentIndex];



    // Convertir en tableau pour utiliser forEach
    dots.forEach((dot, indexs) => {
        dot.classList.toggle("active_dot", indexs === currentIndex);
    });
    currentIndex = (currentIndex + 1) % images.length;
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


