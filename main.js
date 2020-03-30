const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
// Change slides automatically
const auto = true;
const intervalChangeSlide = 5000;
let slideInterval;

const nextSlide = () => {
    // Get the element with the class of current
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');

    // Check for next slide
    // All the slides are siblings inside the slider container
    if(current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // There's no next element, this is the last slide
        // Add current to first slide
        slides[0].classList.add('current');
    }

    // Remove current class with a delay
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get the element with the class of current
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');

    // Check for prev slide
    // All the slides are siblings inside the slider container
    if(current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // There's no prev element, this is the first slide
        // Add current to last slide
        slides[slides.length-1].classList.add('current');
    }

    // Remove current class with a delay
    setTimeout(() => current.classList.remove('current'));
}

// Button events
next.addEventListener('click', e => {
    nextSlide();

    // Reset the intervalTime every time we click back to 5s, so they don't change before or after 5s
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalChangeSlide);
    }
});
prev.addEventListener('click', e => {
    prevSlide();

    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalChangeSlide);
    }
});

// Auto slide in 5s
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalChangeSlide);
}