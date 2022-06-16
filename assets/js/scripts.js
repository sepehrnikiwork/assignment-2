const inputElement = document.querySelector('#input');
const sentence = document.querySelector('.hero-title');
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', changeLocation);

// inputElement.addEventListener('keyup', changeLocation);

function changeLocation() {
    const location = sentence.querySelector("span");
    if (inputElement.value.length === 0) {
        return location.innerText = "Beach";
    }
    return location.innerText = inputElement.value;
}