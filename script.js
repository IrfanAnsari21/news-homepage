const sidemenu = document.getElementById("sidemenu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.getElementById("overlay");

openMenu.addEventListener("click", () => {
    sidemenu.style.right = "0";
    overlay.hidden = false;
    overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    sidemenu.style.right = "-250px";
    overlay.hidden = true;
    overlay.classList.remove("active");
});