const titleSelect = document.querySelector('#title');
const otherTitle = document.querySelector('#other-title');
const designSelect = document.querySelector('#design');
const colorContainer = document.querySelector('#colors-js-puns');
const colorSelect = document.querySelector('#color');
const defaultColorOption = document.createElement('option');
const hiddenColors = [];

// Set focus on the first input element.
document.querySelector('input').focus();

// Initial instructions on load.
otherTitle.style.display = 'none';
colorContainer.style.display = 'none';

// Add text content to defaultColorOption.
defaultColorOption.textContent = 'Please select a color';

// addEventListeners to form elements.
titleSelect.addEventListener('change', () => { showHideElement(); });
designSelect.addEventListener('change', () => { showHideElement(); });

// Show or hide form elements based on user selection.

function showHideElement() {
    // Job Role
    if (titleSelect.value === 'other') {
        // Show 'other' input field.
        otherTitle.removeAttribute('style');
    } else {
        // Hide 'other' input field and remove inputted value.
        otherTitle.style.display = 'none';
        otherTitle.value = '';
    }

    // T-Shirt Info
    if (designSelect.value === 'Select Theme') {
        // Hide 'colorContainer' on 'Select Theme' option.
        colorContainer.style.display = 'none';
    } else if (designSelect.value === 'js puns') {
        rotatingColors('JS Puns');
    } else if (designSelect.value === 'heart js') {
        rotatingColors('JS shirt only');
    }
}

// hiddenColorOptions
function rotatingColors(shirtTheme) {
    // Show 'colorContainer'.
    colorContainer.removeAttribute('style');

    // Check if hiddenColors has values.
    if (hiddenColors.length) {
        // Iterate through hiddenColors.
        for (let i = 0; i < hiddenColors.length; i++) {
            // Add hiddenColor to colorSelect.
            colorSelect.add(hiddenColors[i]);

            // Remove added color from hiddenColor.
            hiddenColors.shift(i);

            i--;
        }
    }

    // Iterate through colorSelect and hide colors based on user selection.
    for (let i = 0; i < colorSelect.length; i++) {
        // If 'shirtTheme' is NOT present in string.
        if (!colorSelect[i].textContent.includes(shirtTheme)) {
            // Add true value to hiddenColors array.
            hiddenColors.push(colorSelect[i]);

            // Remove from NodeList.
            colorSelect.remove(i);

            i--;
        }
    }

    // Add defaultColorOption and select it.
    colorSelect.add(defaultColorOption, 'before');
    colorSelect.selectedIndex = 0;
}
