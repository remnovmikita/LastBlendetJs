//Логіка сторінки Wishlist

import { addWishList, changeTheme, numbers, prodClick } from "./js/handlers";
import { hideLoader, showLoader } from "./js/helpers";
import { getProdById } from "./js/products-api";
import { refs } from "./js/refs";
import { writeProducts } from "./js/render-function";
import { arrCart, arrWishList, KEY, KEY2, KEY3 } from "./js/storage";

wishListApp()



async function wishListApp() {
       document.documentElement.setAttribute(
    "data-theme",
    JSON.parse(localStorage.getItem(KEY3)) || "light"
  );

  numbers()

  showLoader();
  try {
    const promises = arrWishList.map(id => getProdById(id));
    const products = await Promise.all(promises);

    refs.products.innerHTML = writeProducts(products);
  } catch (err) {
    console.error("Ошибка при загрузке списка желаний:", err);
    
  } finally {
    hideLoader();
  }
}

// Клік на відкриття модалки
refs.products.addEventListener("click", prodClick)
//

// Клік накнопку РЕМУВ для додавання\прибирання товару
refs.btnWishList.addEventListener("click", addWishList)
refs.btnWishList.addEventListener("click", wishListApp)
//
refs.btnTheme.addEventListener("click", changeTheme)