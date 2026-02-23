//Логіка сторінки Cart

import { addProdInCart, changeTheme, numbers, ordersReady, prodClick } from "./js/handlers";
import { hideLoader, message, showLoader } from "./js/helpers";
import { getProdById } from "./js/products-api";
import { refs } from "./js/refs";
import { writeProducts } from "./js/render-function";
import { arrCart, arrWishList, KEY3 } from "./js/storage";



cartListApp()


async function cartListApp() {
  document.documentElement.setAttribute(
    "data-theme",
    JSON.parse(localStorage.getItem(KEY3)) || "light"
  );

  numbers()
  refs.spanCart[0].textContent = arrCart.length;

  showLoader();
  try {
    const promises = arrCart.map(id => getProdById(id));
    const products = await Promise.all(promises);

    refs.products.innerHTML = writeProducts(products);

    const totalPrice = products.reduce((acc, prod) => acc + prod.price, 0);
    refs.spanCart[1].textContent = Math.round(totalPrice * 100) / 100;
  } catch (err) {
    console.error("Ошибка при загрузке корзины:", err);
    
  } finally {
    hideLoader();
  }
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

refs.btnTheme.addEventListener("click", changeTheme)