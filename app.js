// accessing the toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
//making the portfolio heading center
const heading = document.querySelector('.navbar-title')
// toggle button click
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    heading.classList.add('heading-center')
})

// ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        );
    }

    function handleScroll() {
        projectCards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add("animate-slide-in");
            }
        });
    }

    function handleResize() {
        projectCards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add("animate-slide-in");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll(); // Initial check on page load
});


