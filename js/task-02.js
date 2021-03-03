const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const ingredientsItem = ingredients.map((ingredient) => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    
    return listItemEl
});

ingredientsEl.append(...ingredientsItem);
console.log(ingredientsEl);
