const jobRole = document.querySelector('#title');
const otherTitleInput = document.querySelector('#other-title');

// On page load focus on first input element.
document.querySelector('input').focus();

// Hide #other-title on page load.
otherTitleInput.style.display = 'none';

// addEventListener to jobRole to act on role change.
jobRole.addEventListener('change', () => {
    // Show or hide otherTitleInput based on user selection.
    if ( jobRole.value === 'other' ) {
        otherTitleInput.removeAttribute('style');
    } else {
        // Remove any entered text and hide input field.
        otherTitleInput.value = '';
        otherTitleInput.style.display = 'none';
    }
});
