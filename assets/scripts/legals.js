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