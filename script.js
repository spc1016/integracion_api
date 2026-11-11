import {getListProducts, getProduct, getByCategory, createProduct, createCart, getCategories} from"./services/dummy_api.js"

window.addEventListener("load", async function(){
    const categorySelect = document.getElementById("category-select");
    const productsContainer = document.getElementById("products-container");
    const statusMessage = document.getElementById("status-message");
    
    await loadCategories(categorySelect);
});


async function loadCategories(select) {
    try {
        const categories = await getCategories();
        categories.forEach((cat) => {
            const option = document.createElement("option");
            option.value = cat.slug;
            option.textContent = cat.name;
            select.appendChild(option);
        });
    } catch (error) {
        console.error("Error cargando categorías:", error);
    }
}