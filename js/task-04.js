
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

let counterValue = 0;

function updateCounterValue() {
    counterValueSpan.textContent = counterValue;
}

decrementBtnEl.addEventListener('click', () => {
    counterValue--;
    updateCounterValue();
});

incrementBtnEl.addEventListener('click', () => {
    counterValue++;
    updateCounterValue();
});