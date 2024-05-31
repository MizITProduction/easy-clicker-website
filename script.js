// Config
let score = 1; // how much score should be added after each click
// End of Config

// -- Section 1 --
const images = [
    'image1.webp', // you can set your own images if you want to add more image create new 'image.png', line
    'image2.webp',
    'image3.webp' 
];

// -- Section 2 --
// don't edit this section if you don't know

let currentImageIndex = 0;

const scoreElement = document.getElementById('score');
const clickableImage = document.getElementById('clickableImage');

clickableImage.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    clickableImage.classList.remove('fade-in');

    setTimeout(() => {
        clickableImage.src = images[currentImageIndex];
        clickableImage.classList.add('fade-in');
    }, 100);
});
