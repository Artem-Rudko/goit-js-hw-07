
const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener("blur", toValidateInput)

function toValidateInput() {
   console.log(validationInputEl.value.length);
   
    if (validationInputEl.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
    } 
    else {
        validationInputEl.classList.remove('valid');
        validationInputEl.classList.add('invalid');
    }
}






// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
// на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid