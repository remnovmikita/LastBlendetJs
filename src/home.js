//Логіка сторінки Home

import { getCatalog } from "./js/products-api";
import { refs } from "./js/refs";
import { writeCatalog } from "./js/render-function";


initAp()

// getCatalog()
// .then(data =>{
//     console.log(data);
    
    
// }).catch(error =>{
//     console.log(error);
    
// })

async function initAp(){
const categories = await getCatalog();
refs.categories.innerHTML = writeCatalog(categories)
}



