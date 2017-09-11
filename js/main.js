let keys = document.querySelectorAll('div.key');
window.addEventListener('keydown', setKeyDown);
window.addEventListener('keyup', setKeyUp);

function setKeyDown(e) {
    let keyElement = document.querySelector(`div[key-code="${e.keyCode}"`);
    keyElement.classList.add('key-down');
    let audio = new Audio('audio/keystroke.wav');
    audio.play();

}

function setKeyUp(e) {
    let keyElement = document.querySelector(`div[key-code="${e.keyCode}"`);
    keyElement.classList.remove('key-down');
}