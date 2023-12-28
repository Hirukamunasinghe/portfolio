// accessing the toggle button
const toggleButton = document.querySelector('.toggle-button');
const navBarLinks = document.querySelectorAll('.nav-links');
const heading = document.querySelector('.navbar-title');

toggleButton.addEventListener('click', () => {
    navBarLinks.forEach(link => {
        link.classList.toggle('active');
    });

    heading.classList.toggle('heading-center');

    const isActive = heading.classList.contains('heading-center');
    if (isActive) {
        // Fix the heading position
        heading.style.position = 'fixed'; 
        // Set it to the top
        heading.style.top = '0'; 
    } else {
        // Reset to the default position
        heading.style.position = null; 
        // Reset the top property
        heading.style.top = null; 
    }
});

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

// const navbar = document.querySelector('.navbar');
// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-150px";
//   }
//   prevScrollpos = currentScrollPos;
// }
