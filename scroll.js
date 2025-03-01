// Function to check if an element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to reveal the element when it is in view
function revealOnScroll() {
    const elements = document.querySelectorAll('.container, .prompt, .timerblock, .button');
    elements.forEach(element => {
        if (isInView(element)) {
            element.style.opacity = 1;
            element.style.visibility = 'visible';
            element.style.transition = 'opacity 0.5s ease-in-out, visibility 0s 0s';
        }
    });
}

// Listen to the scroll event
window.addEventListener('scroll', revealOnScroll);

// Initial check in case elements are already in view on load
revealOnScroll();
