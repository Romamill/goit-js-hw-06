const inputEl = document.querySelector('input');
console.log(inputEl);
const spanEl = document.querySelector('span');
console.log(spanEl);

inputEl.addEventListener('input' ,() => {
    spanEl.textContent = inputEl.value.length === 0 ? 'Anonymous' : inputEl.value;
});