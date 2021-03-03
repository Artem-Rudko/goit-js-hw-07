const inputTextSizeEl = document.querySelector('#font-size-control');
const textToResizeEl = document.querySelector('#text');

inputTextSizeEl.setAttribute("min", "6");
inputTextSizeEl.setAttribute("max", "56");

inputTextSizeEl.addEventListener('input', inputTextSizeHandler);

function inputTextSizeHandler() {
    console.log(inputTextSizeEl.value);
    textToResizeEl.style.fontSize = `${inputTextSizeEl.value}px`;
}



// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.
