const elemCategories = document.querySelector("#categories");

const elemItems = elemCategories.querySelectorAll(".item");
console.log(`В списке ${elemItems.length} категории`);
console.log("");

const titles = [];
elemItems.forEach((elem) => {
  console.log("Категория : ", elem.getElementsByTagName("h2")[0].textContent);
  console.log(
    "Количество эелментов : ",
    elem.getElementsByTagName("li").length
  );
  console.log("");
});
