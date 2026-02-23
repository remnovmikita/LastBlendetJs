//Логіка сторінки Cart

import { addProdInCart, ordersReady, prodClick } from "./js/handlers";
import { message } from "./js/helpers";
import { getProdById } from "./js/products-api";
import { refs } from "./js/refs";
import { writeProducts } from "./js/render-function";
import { arrCart, arrWishList } from "./js/storage";



cartListApp()


async function cartListApp() {
    const allprise = 0
    refs.spanProd[0].textContent = arrCart.length;
    refs.spanProd[1].textContent = arrWishList.length;
    refs.spanCart[0].textContent = arrCart.length;
    const promise = arrCart.map(id => getProdById(id))
        
       Promise.all(promise)
        .then(promises =>{
            refs.products.innerHTML = writeProducts(promises)    
            const prisec = promises.reduce((acc, num)=> acc + num.price, 0)
            refs.spanCart[1].textContent = Math.round(prisec * 100) / 100;            
        })
        .catch(err=>{
            console.error(err);  
        })
        
}


// Клік на відкриття модалки
refs.products.addEventListener("click", prodClick)
//
// Додавання в массив Карт та прибирання
refs.btnCart.addEventListener("click", addProdInCart);
refs.btnCart.addEventListener("click", cartListApp);
//
// Клік кнопки купити
refs.btnBuy.addEventListener("click", ordersReady)
refs.btnBuy.addEventListener("click", cartListApp)
//

