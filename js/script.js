const titleSelect = document.querySelector('#title');
const otherTitle = document.querySelector('#other-title');

const designSelect = document.querySelector('#design');
const colorContainer = document.querySelector('#colors-js-puns');

const activities = document.querySelector('.activities');

const paymentInfo = document.querySelector('#payment');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

const registerButton = document.querySelector('button');

// Focus first input element.
document.querySelector('input').focus();

// Hide some HTML elements on load.
otherTitle.style.display = 'none';
colorContainer.style.display = 'none';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

// Create and append new element for price total.
const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border-top: rgba(8, 63, 87, 0.3) 2px dashed; padding-top: 22px;');
newDiv.innerHTML = '<b>Total: </b>$0';
activities.after(newDiv);

// Payment Info Adjustments.
paymentInfo.remove(0);

// addEventListeners to form elements.
titleSelect.addEventListener('change', () => {
    jobRole();
});

designSelect.addEventListener('change', () => {
    tShirtInfo();
});

activities.addEventListener('change', event => {
    activityRegister(event);
});

paymentInfo.addEventListener('change', () => {
    paymentSection();
});

registerButton.addEventListener('click', event => {
    formValidation(event);
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
        // Ensure elements do not disappear on multiple event launches.
        color.removeAttribute('style');

        // Condition check for color options.
        switch (true) {
            case designSelect.value === 'js puns' && color.text.includes('♥'):
            case designSelect.value === 'heart js' && color.text.includes('Puns'):
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

function activityRegister(event) {
    const allActivities = activities.querySelectorAll('input');
    let totalPrice = 0;

    // Is checkbox ticked?
    if (event.target.checked) {
        // Iterate through the activities.
        for (let i = 0; i < allActivities.length; i++) {
            // Does the target input's schedule match but has a different name?
            if (
                allActivities[i].getAttribute('data-day-and-time') === event.target.getAttribute('data-day-and-time') &&
                allActivities[i].getAttribute('name') !== event.target.getAttribute('name')
            ) {
                // Disable the checkbox.
                allActivities[i].disabled = true;
            }
        }
    } else {
        for (let i = 0; i < allActivities.length; i++) {
            // Does the target input's schedule match but has a different name?
            if (
                allActivities[i].getAttribute('data-day-and-time') === event.target.getAttribute('data-day-and-time') &&
                allActivities[i].getAttribute('name') !== event.target.getAttribute('name')
            ) {
                // Enable the checkbox.
                allActivities[i].disabled = false;
            }
        }
    }

    // Iterate through the checked boxes and add its cost to the totalPrice.
    for (let i = 0; i < allActivities.length; i++) {
        if (allActivities[i].checked) {
            totalPrice += Number(allActivities[i].getAttribute('data-cost'));
        }
    }

    // Print the total to the DOM.
    newDiv.innerHTML = `<b>Total: </b>$${totalPrice}`;
}

function paymentSection() {
    const creditCard = document.querySelector('#credit-card');

    // Condition the shown content based on user selection.
    if (paymentInfo.value === 'paypal') {
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
        paypal.removeAttribute('style');
    } else if (paymentInfo.value === 'bitcoin') {
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.removeAttribute('style');
    } else {
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
        creditCard.removeAttribute('style');
    }
}
