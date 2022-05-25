const mobileNavButton = document.querySelector(".mobile_nav_button");
const mobileNavIcon = document.querySelector(".mobile_nav_button_icon");
const mobileNav = document.querySelector(".mobile_nav")

mobileNavButton.addEventListener("click", function () {
    mobileNavIcon.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("no_scroll")
})

$(document).ready(function(){
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        }
    });
});