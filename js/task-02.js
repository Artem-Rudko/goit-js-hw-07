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

//   Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего вставит все li 
// за одну операцию в список ul.ingredients. Для создания DOM-узлов 
// используй document.createElement().