import { DUMMY_BASE_URL } from "../config/api.js";

async function fetchJson(url) {
    var r = await fetch(url);
    if(!r.ok) throw new Error("HTTP" + r.status + "en" + url);
    return await r.json();
}

async function postJson(url,data) {
    const r = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if(!r.ok) throw new Error("HTTP" + r.status + "en" + url);
    return await r.json();
}

async function getCategories(params) {
    return await fetchJson(DUMMY_BASE_URL+"/products/categories");
}

async function getListProducts() {
    return await fetchJson(DUMMY_BASE_URL+"/products?limit=10&skip=0");
}

async function getProduct(product) {
    return await fetchJson(DUMMY_BASE_URL+"/products/search?q="+encodeURIComponent(product));
}

async function getByCategory(category) {
    return await fetchJson(DUMMY_BASE_URL+"/products/category/"+encodeURIComponent(category));
}

async function createProduct(productData) {
    return await postJson(DUMMY_BASE_URL+"/products/add", productData);
}

async function createCart(cartData) {
    return await postJson(DUMMY_BASE_URL+"/carts/add", cartData);
}

export{getListProducts, getProduct, getByCategory, createProduct, createCart, getCategories};
