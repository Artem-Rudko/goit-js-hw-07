const counterBtnDecrEl = document.querySelector('#counter button[data-action="decrement"]');
const counterBtnIncrEl = document.querySelector('#counter button[data-action="increment"]');
const counterDisplayEl = document.querySelector('#value');
let counterValue = 0;

// counterDisplayEl.textContent = counterValue;

counterBtnDecrEl.addEventListener('click', decrement);
function decrement() {
    counterValue -= 1;
    counterDisplayEl.textContent = counterValue;
};

counterBtnIncrEl.addEventListener('click', increment);
function increment() {
    counterValue += 1;
    counterDisplayEl.textContent = counterValue;
};
