export const KEY = "cart";
export let arrCart = JSON.parse(localStorage.getItem(KEY)) || [];

export const KEY2 = "wishlist"

export let arrWishList = JSON.parse(localStorage.getItem(KEY2)) || [];

export const KEY3 = "theme"

export let theme =  JSON.parse(localStorage.getItem(KEY3)) || "light";