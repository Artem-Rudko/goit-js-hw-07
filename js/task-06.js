
const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener("blur", toValidateInput)

function toValidateInput() {
//    console.log(validationInputEl.value.length);
   
    if (validationInputEl.value.length === Number(validationInputEl.dataset.length)) {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
    } 
    else {
        validationInputEl.classList.remove('valid');
        validationInputEl.classList.add('invalid');
    }
}