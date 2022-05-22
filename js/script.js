const mobileNavButton = document.querySelector(".mobile_nav_button");
const mobileNavIcon = document.querySelector(".mobile_nav_button_icon");
const mobileNav = document.querySelector(".mobile_nav")

mobileNavButton.addEventListener("click", function () {
    mobileNavIcon.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("no_scroll")
})