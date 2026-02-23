export const KEY = "cart";
export const arrCart = JSON.parse(localStorage.getItem(KEY)) || [];

export const KEY2 = "wishlist"

export const arrWishList = JSON.parse(localStorage.getItem(KEY2)) || [];