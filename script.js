const menu_toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menu_toggle.addEventListener('click', ()=>
{
    if(nav.classList.contains('active'))
    {
        nav.classList.remove('active');
        menu_toggle.classList.remove('menu-cross');
    }

    else
    {
        nav.classList.add('active');
        menu_toggle.classList.add('menu-cross');
    }
})

function showAppCategory(category) {
    var slides = document.querySelectorAll('.app-slide');
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });

    var activeSlides = document.querySelectorAll('.' + category);
    activeSlides.forEach(function(slide) {
        slide.style.display = 'block';
    });

    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    var activeButton = document.querySelector('.' + category + '-button');
    activeButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 0;
    var totalSlides = document.querySelectorAll('.slide').length;
    var slideWidth = document.querySelector('.slide').offsetWidth;

    document.querySelector('.next-slide').addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
    });

    document.querySelector('.prev-slide').addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    function updateSlider() {
        var newPosition = -slideIndex * slideWidth;
        document.querySelector('.slider-container').style.transform = 'translateX(' + newPosition + 'px)';
    }
});
