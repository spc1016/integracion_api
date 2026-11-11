import { DUMMY_BASE_URL } from "../config/api";

async function fetchJson(url) {
    var r = await fetch(url);
    if(!r.ok) throw new Error("HTTP" + r.status + "en" + url);
    return await r.json();
}

async function getListProducts() {
    return await fetchJson(DUMMY_BASE_URL+"/products?limit=10&skip=0");
}

async function getProduct(product) {
    return await fetchJson(DUMMY_BASE_URL+"/products/search?q="+product);
}

async function getByCategory(category) {
    return await fetchJson(DUMMY_BASE_URL+"/products/category/"+category)
}
