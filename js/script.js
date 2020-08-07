const titleSelect = document.querySelector('#title');
const otherTitle = document.querySelector('#other-title');

const designSelect = document.querySelector('#design');
const colorContainer = document.querySelector('#colors-js-puns');

// Focus first input element.
document.querySelector('input').focus();

// Hide #other-title and #colors-js-puns.
otherTitle.style.display = 'none';
colorContainer.style.display = 'none';

// addEventListeners to form elements.
titleSelect.addEventListener('change', () => {
    jobRole();
});

designSelect.addEventListener('change', () => {
    tShirtInfo();
});

// Basic Info Section.
function jobRole() {
    // Check user's selection for Job Role.
    if (titleSelect.value === 'other') {
        // Show #other-title input field.
        otherTitle.removeAttribute('style');
    } else {
        // Hide #other-title input field and remove any inputted value.
        otherTitle.style.display = 'none';
        otherTitle.value = '';
    }
}

// T-Shirt Info Section.
function tShirtInfo() {
    const colorSelect = document.querySelector('#color');

    // Show or hide #color-js-puns based on #design value.
    designSelect.value !== 'Select Theme'
        ? colorContainer.removeAttribute('style')
        : (colorContainer.style.display = 'none');

    // Iterate through #color and show/hide based on #design value.
    Array.from(colorSelect).forEach(color => {
        // Ensure elements do not disappear and multiple event launches.
        color.removeAttribute('style');

        // Condition check for color options.
        if (designSelect.value === 'js puns' && color.text.includes('♥')) {
            color.style.display = 'none';
        } else if (designSelect.value === 'heart js' && color.text.includes('Puns')) {
            color.style.display = 'none';
        }
    });

    // Find first visible option and display as selectedIndex.
    for (let i = 0; i < colorSelect.length; i++) {
        if (!colorSelect[i].hasAttribute('style')) {
            colorSelect.selectedIndex = i;
            break;
        }
    }
}
