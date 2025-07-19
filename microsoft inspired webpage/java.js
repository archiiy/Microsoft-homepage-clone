const backgrounds = [
    'pictures/laptop-murjp1nk4lp1idlt.jpg',
    'pictures/img2.PNG',
];

let index = 0;
let intervalId = null;


function setBackground() {
    const section = document.getElementById("mainSection");

    // Fade out
    section.style.opacity = 0;

    setTimeout(() => {
        // Change background after fade out
        section.style.backgroundImage = `url('${backgrounds[index]}')`;

        // Fade in
        section.style.opacity = 1;
    }, 500); // half of your transition time
}


function changeBackground() {
    index = (index + 1) % backgrounds.length;
    setBackground();
}

function startSlideshow() {
    intervalId = setInterval(changeBackground, 3000);
}

function stopSlideshow() {
    clearInterval(intervalId);
    intervalId = null;
}

function nextSlide() {
    stopSlideshow(); // optional: pause slideshow on manual skip
    changeBackground();
}

// Start automatically on page load
window.onload = () => {
    setBackground();
    startSlideshow();
};