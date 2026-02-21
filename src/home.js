//Логіка сторінки Home

import { getCatalog, getProducts } from './js/products-api';
import { refs } from './js/refs';
import { writeCatalog, writeProducts } from './js/render-function';

initAp();

// getCatalog()
// .then(data =>{
//     console.log(data);

// }).catch(error =>{
//     console.log(error);

// })

async function initAp() {
  const categories = await getCatalog();
  refs.categories.innerHTML = writeCatalog(categories);

  const products = await getProducts();
  refs.products.innerHTML = writeProducts(products);
}
