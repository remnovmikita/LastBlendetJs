//Логіка сторінки Home

import { getCatalog, getProdByCaterogy, getProdById, getProductByName, getProducts, getProductsAll } from './js/products-api';
import { refs } from './js/refs';
import { writeCatalog, writemodalById, writeProducts } from './js/render-function';
import { addProdInCart, addWishList, changeTheme, clicBtnLoadMore, numbers, onClick, prodClick, scrollUp, submitForm } from './js/handlers';
import { arrCart, arrWishList, KEY3 } from './js/storage';
import { hideLoader, loadMoreNoVisible, loadMoreVisible, showLoader } from './js/helpers';


initAp();


async function initAp() {
  
  numbers()
  showLoader();
  try{
  const categories = await getCatalog();
  refs.categories.innerHTML = writeCatalog(categories);
  const products = await getProducts();
  refs.products.innerHTML = writeProducts(products);
  loadMoreVisible()
  }catch{

  }
  finally{
    hideLoader()
  }


document.body.setAttribute("data-theme", JSON.parse(localStorage.getItem(KEY3)))
}


refs.categories.addEventListener("click", onClick)

refs.products.addEventListener("click", prodClick)

refs.form.addEventListener("submit", submitForm)

refs.btnCart.addEventListener("click", addProdInCart);

refs.btnWishList.addEventListener("click", addWishList)

refs.btnTheme.addEventListener("click", changeTheme)


 // вынесем за пределы функции

refs.btnLoadMore.addEventListener("click", clicBtnLoadMore);

refs.btnScrollUp.addEventListener("click", scrollUp)