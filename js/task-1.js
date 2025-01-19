
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);


items.forEach(function (item) {
    const heading = item.querySelector("h2").textContent;
    const subCategories = item.querySelectorAll(" ul >  li");
    console.log(`Category: ${heading}`);
    console.log(`Elements: ${subCategories.length}`);

});




