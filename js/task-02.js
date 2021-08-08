const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientEls = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});

const listIngredientsEl = document.getElementById("ingredients");
listIngredientsEl.append(...ingredientEls);
