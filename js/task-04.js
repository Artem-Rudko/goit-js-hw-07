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



// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса