//Логіка сторінки Wishlist

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