
const listEl = document.querySelector('#categories');
// console.dir(listEl);

const listItemsEl = Array.from(listEl.querySelectorAll('.item'));
console.log(`В списке ${listItemsEl.length} категории`);
// console.log(listItemsEl);

const listItemDescrEl = listItemsEl.forEach(
    (item) => {
        console.log('Категория: ', item.firstElementChild.textContent)
        console.log('Количество элементов:', item.querySelectorAll('li').length)
    }
);
