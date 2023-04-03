const images = ['0.jpg','1.jpg','2.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector('body');

if (chosenImage === '2.jpg') {
    bgImage.style.color = '#444';
}

bgImage.style.backgroundImage = `url(img/${chosenImage})`;