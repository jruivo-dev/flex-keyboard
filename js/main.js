let keys = document.querySelectorAll('div.key');
window.addEventListener('keydown', setKeyDown);
window.addEventListener('keyup', setKeyUp);

function getPressedKey(e) {}

function setKeyDown(e) {
    let keyElement = document.querySelector(`div[key-code="${e.keyCode}"`);
    keyElement.classList.add('key-down');

}

function setKeyUp(e) {
    let keyElement = document.querySelector(`div[key-code="${e.keyCode}"`);
    keyElement.classList.remove('key-down');
}