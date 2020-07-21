// Global Variables
const titleSelect = document.querySelector('#title');
const otherTitleInput = document.querySelector('#other-title');
const designSelect = document.querySelector('#design');
const colorsDiv = document.querySelector('#colors-js-puns');

// Initial Instructions
otherTitleInput.style.display = 'none';
colorsDiv.style.display = 'none';

// Call event listeners.
titleSelect.addEventListener('change', () => { showHideElements() });
designSelect.addEventListener('change', () => { showHideElements() });

// Functions
function showHideElements() {
    // Job Role
    if (titleSelect.value === 'other') {
        otherTitleInput.removeAttribute('style');
    } else {
        otherTitleInput.value = '';
        otherTitleInput.style.display = 'none';
    }

    // Design
    if (designSelect.value !== 'Select Theme') {
        colorsDiv.removeAttribute('style');
    } else {
        colorsDiv.style.display = 'none';
    }
}
