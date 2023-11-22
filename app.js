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

