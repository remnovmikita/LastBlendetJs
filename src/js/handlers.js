import { getProdByCaterogy, getProducts } from "./products-api";
import { refs } from "./refs";
import { writeProducts } from "./render-function";


export async function onClick(e){
    let products;
    const target = e.target;
    
    if(!target.classList.contains("categories__btn"))return
    refs.categories.querySelectorAll("button").forEach(btn => btn.classList.remove("categories__btn--active"))
    

    if(target.textContent === "All"){
        products = await getProducts();
    }else{
        products = await getProdByCaterogy(e.target.textContent) 
    }
    if(products.length === 0) refs.div.classList.add("not-found--visible");
    target.classList.add("categories__btn--active")
    refs.products.innerHTML = writeProducts(products);

    
    
}