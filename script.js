import {getListProducts, getProduct, getByCategory, createProduct, createCart, getCategories} from"./services/dummy_api.js"

window.addEventListener("load", async function(){
    const categorySelect = document.getElementById("category-select");
    const productsContainer = document.getElementById("products-container");
    const statusMessage = document.getElementById("status-message");
    
    console.log(productsContainer);
    await loadCategories(categorySelect);
    await loadProducts(productsContainer);
});



async function loadProducts(container){
    container.innerHTML = '';
    
    try{
        const data = await getListProducts();
        data.products.forEach((prod) =>{
        const card = document.createElement("article")
        card.className = "product-card border p-4 rounded"
            card.innerHTML = `
                <img src="${prod.thumbnail}" alt="${prod.title}">
                <h3>${prod.title}</h3>
                <p>${prod.description}</p>
                <p>Precio: $${prod.price}</p>
                <button class="add-to-cart-btn" data-id="${prod.id}">
                    Añadir al carrito
                </button>
            `;
            container.appendChild(card);
        });
    } catch(error){
        console.error("Erro al cargar los productos", error)
    } 
}

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