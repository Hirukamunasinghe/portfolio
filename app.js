//Navigates to the sporting web page when the user clicks on the first read more button in the first card
const cardButton = document.querySelector('.card-button');
cardButton.addEventListener('click', () => {
    window.location = 'nft.html'
});

//Navigates to the ping pong game page after the button click
const cardbuttonTwo = document.querySelector('.card-button-two');
cardbuttonTwo.addEventListener('click', () => {
    window.location = 'pingpong.html'
})

//Navigates to the blog post after the button click
const cardButtonThree = document.querySelector('.card-button-three');
cardButtonThree.addEventListener('click', () => {
    window.location = 'blog.html'
})

// accessing the toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
//making the portfolio heading center
const headingButton = document.querySelector('.navbar-title')
// toggle button click
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    headingButton.classList.add('heading-center')
})