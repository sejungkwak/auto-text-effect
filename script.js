const heading = document.querySelector('.heading');
const inputBox = document.getElementById('speed-controller');
const btnUp = document.getElementById('button-up');
const btnDown = document.getElementById('button-down');

let i = 0;
let txt = 'I Love Programming!';
let speed = 1000;

function typeWriter() {
    if (i < txt.length) {
        heading.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (heading.innerHTML === txt) {
        heading.innerHTML = '';
        i = 0;
        typeWriter();
    }
}

function speedUp() {
    inputBox.stepUp(1);
    speed = (speed / inputBox.value) + 200;
}

function speedDown() {
    inputBox.stepDown(1);
    speed = (speed / inputBox.value) + 200;
}


typeWriter();
btnUp.addEventListener('click', speedUp)
btnDown.addEventListener('click', speedDown)