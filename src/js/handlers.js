import { message } from "./helpers";
import { getProdByCaterogy, getProdById, getProductByName, getProducts } from "./products-api";
import { refs } from "./refs";
import { writemodalById, writeProducts } from "./render-function";
import { arrCart, arrWishList, KEY, KEY2 } from "./storage";


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

refs.btnClose.addEventListener("click", closeModal)

refs.modal.addEventListener("click", e=>{
    if(e.target === e.currentTarget) closeModal();
    
})


function checkButton(event){
    if(event.key === "Escape")closeModal();
}
function closeModal(){
    refs.modal.classList.remove("modal--is-open");
    window.removeEventListener("keydown", checkButton)
}


export async function submitForm(e) {
    e.preventDefault();
    const findValueProducts = e.target.elements.searchValue.value
    if(findValueProducts.trim() === "") return

    const getProd = await getProductByName(findValueProducts);
    
    if(getProd.length === 0) {
        refs.products.innerHTML = ""
    }else{
        refs.products.innerHTML = writeProducts(getProd)
    }
    
    refs.div.classList.toggle("not-found--visible", getProd.length === 0);
    e.target.reset();    

    
}

export async function prodClick(e){
 const target = e.target.closest("li");
 if(!target)return
 const product = await getProdById(target.dataset.id)
 const id = target.dataset.id
 refs.modalContent.innerHTML = writemodalById(product)
 
 refs.modal.classList.add("modal--is-open")
 if (arrCart.includes(id)) {
    refs.btnCart.textContent = "Remove from Cart";
  } else {
    refs.btnCart.textContent = "Add to Cart";
  }
  if(arrWishList.includes(id)){
    refs.btnWishList.textContent = "Remove from Wishlist";
  }else{
    refs.btnWishList.textContent = "Add from Wishlist"
  }
 window.addEventListener("keydown", checkButton)
 
}
/*#region addCart*/


export function addProdInCart() {
  const id = refs.modal.querySelector(".modal-product__content").dataset.id;

 if (arrCart.includes(id)) {
    // удаляем товар
    const index = arrCart.indexOf(id);
    arrCart.splice(index, 1);
    refs.btnCart.textContent = "Add to Cart";
  } else {
    // добавляем товар
    arrCart.push(id);
    refs.btnCart.textContent = "Remove from Cart";
  }


  localStorage.setItem(KEY, JSON.stringify(arrCart));
  refs.spanProd[0].textContent = arrCart.length;
}

/*#endregion addCart*/
/*#region WishList*/

export function addWishList(){
    const id = refs.modal.querySelector(".modal-product__content").dataset.id;
if (arrWishList.includes(id)) {
    // удаляем товар
    const index = arrWishList.indexOf(id);
    arrWishList.splice(index, 1);
    refs.btnWishList.textContent = "Add to Wishlist";
  } else {
    // добавляем товар
    arrWishList.push(id);
    refs.btnWishList.textContent = "Remove from Wishlist";
  }

    localStorage.setItem(KEY2, JSON.stringify(arrWishList))
    refs.spanProd[1].textContent = arrWishList.length;
    
}

/*#endregion WishList*/


/*#region Orders Ready*/

export function ordersReady(){
  message("success", "Замовлення готове");
  
  
  // const info = localStorage.getItem(KEY)
  arrCart.splice(0, arrCart.length)
  localStorage.setItem(KEY, JSON.stringify(arrCart))


}

/*#endregion Orders Ready*/