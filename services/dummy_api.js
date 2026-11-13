import { DUMMY_BASE_URL } from "../config/api.js";

import{fetchJson, postJson} from "../utils/http.js"

async function getCategories(params) {
    return await fetchJson(DUMMY_BASE_URL+"/products/categories");
}

async function getListProducts(limit = 10, skip = 0) {
    return await fetchJson(`${DUMMY_BASE_URL}/products?limit=${limit}&skip=${skip}`);
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
