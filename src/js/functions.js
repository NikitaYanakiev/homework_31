function showNextSlide() {
    const sliderItems = document.querySelectorAll('.slider__item');
    let nextSlide = document.querySelector('.slider__item.active').nextElementSibling;
    sliderItems.forEach(item => {
        item.classList.remove('active');
    });

    if (!nextSlide) {
        nextSlide = sliderItems[0];
    }

    nextSlide.classList.add('active');

    clearInterval(sliderInterval);
    sliderInterval = setInterval(showNextSlide, 3000);
}

function showPrevSlide() {
    const sliderItems = document.querySelectorAll('.slider__item');
    let prevSlide = document.querySelector('.slider__item.active').previousElementSibling;

    sliderItems.forEach(item => {
        item.classList.remove('active');
    });

    if (!prevSlide) {
        prevSlide = sliderItems[sliderItems.length - 1];
    }

    prevSlide.classList.add('active');
    clearInterval(sliderInterval);
    sliderInterval = setInterval(showPrevSlide, 3000);
}

let sliderInterval = setInterval(showNextSlide, 3000);