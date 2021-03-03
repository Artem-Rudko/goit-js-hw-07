const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInputName);

function handleInputName() {
    inputEl.value.length>0 ? nameOutputEl.textContent = inputEl.value : nameOutputEl.textContent = 'незнакомец'
};