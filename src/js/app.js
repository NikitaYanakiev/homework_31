document.querySelector('.btns').addEventListener('click', event => {
    if (event.target.classList.contains('next-btn')) {
        showNextSlide();
    } else if (event.target.classList.contains('prev-btn')) {
        showPrevSlide();
    }
});
