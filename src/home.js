//Логіка сторінки Home

import { getCatalog, getProdByCaterogy, getProdById, getProductByName, getProducts } from './js/products-api';
import { refs } from './js/refs';
import { writeCatalog, writemodalById, writeProducts } from './js/render-function';
import { addProdInCart, onClick, prodClick, submitForm } from './js/handlers';

initAp();

async function initAp() {
  const categories = await getCatalog();
  refs.categories.innerHTML = writeCatalog(categories);

  const products = await getProducts();
  refs.products.innerHTML = writeProducts(products);

}


refs.categories.addEventListener("click", onClick)

refs.products.addEventListener("click", prodClick)

refs.form.addEventListener("submit", submitForm)

refs.btnCart.addEventListener("click", addProdInCart);


