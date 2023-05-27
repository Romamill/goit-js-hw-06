const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', () => {
    const isValidEl = inputEl.value.length === parseInt(inputEl.getAttribute('data-length'));
    inputEl.classList.toggle('valid', isValidEl);
    inputEl.classList.toggle('invalid', !isValidEl);
});