//Логіка сторінки Home

import { getCatalog, getProdByCaterogy, getProducts } from './js/products-api';
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


refs.categories.addEventListener("click", onClick)

async function onClick(e){
    let products;
    const target = e.target;
    
    if(!target.classList.contains("categories__btn"))return
    refs.categories.querySelectorAll("button").forEach(btn => btn.classList.remove("categories__btn--active"))
    console.log(target.textContent);

    if(target.textContent === "All"){
        products = await getProducts();
    }else{
        products = await getProdByCaterogy(e.target.textContent) 
    }
    if(products.length === 0) refs.div.classList.add("not-found--visible");
    target.classList.add("categories__btn--active")
    refs.products.innerHTML = writeProducts(products);

    console.log(refs.div);
    
}