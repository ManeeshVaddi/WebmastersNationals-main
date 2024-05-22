/*let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

nextBtn.onclick = () => {
    active = active + 1;
    setSlider();
}
prevBtn.onclick = () => {
    active = active - 1;
    setSlider();
}

const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    // 
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if(active == lastPosition) nextBtn.classList.add('d-none');
    if(active == firstPosition) prevBtn.classList.add('d-none');
}
setSlider();

// set diameter
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter+'px');
}
setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
})
*/

let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

// Function to set the slider state
const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if (oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if (active == lastPosition) nextBtn.classList.add('d-none');
    if (active == firstPosition) prevBtn.classList.add('d-none');
}

// Function to update the active index automatically
const updateActive = () => {
    active = (active + 1) % 6; // Increment active, reset to 0 when it reaches 6
    setSlider();
}

// Call updateActive every 3 seconds
setInterval(updateActive, 6500);

// Call setSlider initially to set the first active item
setSlider();

// Event listeners for previous and next buttons
nextBtn.onclick = () => {
    active = (active + 1 > lastPosition) ? lastPosition : active + 1;
    setSlider();
}

prevBtn.onclick = () => {
    active = (active - 1 < firstPosition) ? firstPosition : active - 1;
    setSlider();
}

// Function to set the diameter of the slider
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}

setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
});

