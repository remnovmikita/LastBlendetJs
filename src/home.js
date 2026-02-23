//Логіка сторінки Home

import { getCatalog, getProdByCaterogy, getProdById, getProductByName, getProducts } from './js/products-api';
import { refs } from './js/refs';
import { writeCatalog, writemodalById, writeProducts } from './js/render-function';
import { addProdInCart, addWishList, onClick, prodClick, submitForm } from './js/handlers';
import { arrCart, arrWishList } from './js/storage';

initAp();

async function initAp() {
  const categories = await getCatalog();
  refs.categories.innerHTML = writeCatalog(categories);

  const products = await getProducts();
  refs.products.innerHTML = writeProducts(products);

  refs.spanProd[0].textContent = arrCart.length;
refs.spanProd[1].textContent = arrWishList.length;
}


refs.categories.addEventListener("click", onClick)

refs.products.addEventListener("click", prodClick)

refs.form.addEventListener("submit", submitForm)

refs.btnCart.addEventListener("click", addProdInCart);

refs.btnWishList.addEventListener("click", addWishList)


