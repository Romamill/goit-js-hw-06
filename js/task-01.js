
const categoriesElement = document.querySelector('#categories');
const categoriesList = Array.from(categoriesElement.children);
const categoriesCount = categoriesList.length;

console.log(`Number of categories: ${categoriesCount}\n`);

categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElements = category.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}\n`);
});

