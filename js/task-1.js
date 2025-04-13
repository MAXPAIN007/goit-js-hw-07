const categoriesList = document.querySelectorAll('#categories>li.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(item => {
  const getTitle = item.querySelector('h2').textContent;
  const getItemNumber = item.querySelectorAll('li').length;

  console.log(`Category: ${getTitle}`);
  console.log(`Elements: ${getItemNumber}`);
});
