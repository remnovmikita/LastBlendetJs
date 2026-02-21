//Логіка сторінки Home

import { getCatalog, getProdByCaterogy, getProdById, getProducts } from './js/products-api';
import { refs } from './js/refs';
import { writeCatalog, writemodalById, writeProducts } from './js/render-function';
import { onClick } from './js/handlers';
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

refs.products.addEventListener("click", prodClick)

refs.btnClose.addEventListener("click", closeModal)

refs.modal.addEventListener("click", e=>{
    if(e.target === e.currentTarget) closeModal();
    
})

async function prodClick(e){
 const target = e.target.closest("li");
 if(!target)return
 console.log(target.dataset.id);
 const product = await getProdById(target.dataset.id)
 console.log(product);
 
 refs.modalContent.innerHTML = writemodalById(product)
 console.log(refs.modal);
 
 refs.modal.classList.add("modal--is-open")
 window.addEventListener("keydown", checkButton)
 
}
 function closeModal(){
    refs.modal.classList.remove("modal--is-open");
    window.removeEventListener("keydown", checkButton)
}
function checkButton(event){
    if(event.key === "Escape")closeModal();
}