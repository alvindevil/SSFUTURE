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

function showSlider(type) {
    var slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });

    // Show the selected type of website slide
    var selectedSlide = document.querySelector('.' + type);
    selectedSlide.style.display = 'flex';
}
