const offset = 1000;
const scrollUp = document.querySelector('.scrollup');
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// add class ACTIVE to button
window.addEventListener('scroll', () => {
    if (getTop() > offset) {
        scrollUp.classList.add('active')
    } else {
        scrollUp.classList.remove('active')
    }
});

// scroll to top on click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});