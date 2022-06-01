// grab DOM elements
const tosCheckbox = document.getElementById('tos-checkbox');
const displayAnimal = document.getElementById('display-animal');
const animalSection = document.getElementById('animal-section');

const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('image-display');
// set event listeners

tosCheckbox.addEventListener('change', () => {
    displayAnimal.disabled = !tosCheckbox.checked;
    // learned how case sensitive JS can be. Is there any way to check
    // if this happens in your code, as the code will have no errors show?
});

displayAnimal.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
});

imageSelect.addEventListener('change', () => {
    const src = 'assets/' + imageSelect.value;
    imageDisplay.src = src;
});

    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
