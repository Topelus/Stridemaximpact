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

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("blogSearch");
    const searchBtn = document.getElementById("searchBtn");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const blogItems = document.querySelectorAll(".blog-item");

    // Search functionality
    searchBtn.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        blogItems.forEach((item) => {
            const text = item.innerText.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Category filter functionality
    categoryButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");
            categoryButtons.forEach((button) => button.classList.remove("active"));
            btn.classList.add("active");

            blogItems.forEach((item) => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});