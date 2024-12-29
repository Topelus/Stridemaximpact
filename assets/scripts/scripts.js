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
    'url("assets/images/pexels-fauxels-3183150.webp")',
    'url("assets/images/reading-glasses-piles-coins-high-view.webp")',
    'url("assets/images/pexels-padrinan-194094.webp")',
    'url("assets/images/man-wearing-smart-glasses.webp")'

];
const texts = [
    "<h1>Bienvenue à Stride</h1><p> Architecte du progrès, nous embrassons la diversité en catalysant l'innovation pour bâtir un monde où chaque interaction crée une opportunité de croissance, de prospérité et de partage.</p >",
    "<h1>Boostez la Croissance de votre entreprise</h1><p> Nous vous accompagnons avec des solutions sur mesure pour faire grandir votre PME et assurer sa pérennité. Ensemble, développons l'avenir de votre entreprise.</p > ",
    "<h1>L'Excellence par la Connaissance</h1><p> Explorez de nouvelles perspectives avec nos études approfondies, nos recherches innovantes et nos formations spécialisées pour rester à la pointe de votre secteur.</p >",
    "<h1>Renforcez Votre Leadership</h1><p>Optimisez la gouvernance et stimulez le management de votre organisation pour des performances accrues, basées sur les meilleures pratiques et un leadership fort</p >",
    "<h1>Connecter, Communiquer et Captiver</h1><p>Créez des connexions fortes et des événements mémorables avec nos solutions intégrées en télécommunications et communication. Nous vous aidons à toucher votre audience de manière durable et percutante.</p >",
];

var currentIndex = 0;

function changeBackgroundImage() {
    // Change the background image
    backgroundContainer.style.backgroundImage = images[currentIndex];
    // Update the index, and loop back to the start if necessary
    banner.innerHTML = texts[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}
// Initial call to set the first background image
changeBackgroundImage();
// Change the background every 10 seconds (10000 milliseconds)
setInterval(changeBackgroundImage, 10000);

var dots = document.querySelectorAll('.banndots span');

// Convertir en tableau pour utiliser forEach
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        changeBackgroundImage();
        console.log(index);
    });
});

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


