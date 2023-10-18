//Navigates to the sporting web page when the user clicks on the first read more button in the first card
const cardButton = document.querySelector('.card-button');
cardButton.addEventListener('click', () => {
    window.location = 'https://hirukamunasinghe.github.io/sporting-website-page/'
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

