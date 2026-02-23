//Логіка сторінки Wishlist

import { addWishList, prodClick } from "./js/handlers";
import { getProdById } from "./js/products-api";
import { refs } from "./js/refs";
import { writeProducts } from "./js/render-function";
import { arrCart, arrWishList, KEY, KEY2 } from "./js/storage";

wishListApp()



async function wishListApp(){
    refs.spanProd[0].textContent = arrCart.length;
    refs.spanProd[1].textContent = arrWishList.length;

    const promise = arrWishList.map(id => getProdById(id))

    Promise.all(promise)
    .then(promises =>{
        refs.products.innerHTML = writeProducts(promises)
    })
    .catch(err=>{
        console.error(err);
        
    })
    
}
// Клік на відкриття модалки
refs.products.addEventListener("click", prodClick)
//

// Клік накнопку РЕМУВ для додавання\прибирання товару
refs.btnWishList.addEventListener("click", addWishList)
refs.btnWishList.addEventListener("click", wishListApp)
//