import{a}from"./vendor-BJ9gahTP.js";a.defaults.baseURL="https://dummyjson.com/products";const m=async()=>{const{data:o}=await a.get("/category-list");return["All",...o]},_=async(o=1)=>{const t=`?limit=12&skip=${(o-1)*12}`,{data:s}=await a.get(t);return s.products},g=async(o,t=1)=>{const{data:s}=await a.get(`/category/${o}?limit=12&skip=${(t-1)*12}`);return s.products},y=async o=>{const{data:t}=await a.get(`/${o}`);return t},$=async(o,t=1)=>{const{data:s}=await a.get(`/search?q=${o}&limit=12&skip=${(t-1)*12}`);return s.products},b={categories:document.querySelector(".categories"),products:document.querySelector(".products"),div:document.querySelector("div.not-found"),modalContent:document.querySelector("div.modal-product"),modal:document.querySelector("div.modal"),btnClose:document.querySelector(".modal__close-btn"),form:document.querySelector(".search-form"),btnCart:document.querySelector(".modal-product__btn--cart"),spanProd:document.querySelectorAll("span.nav__count"),btnWishList:document.querySelector(".modal-product__btn--wishlist")},S=o=>o.map(t=>`
        <li class="categories__item">
        <button class="categories__btn ${t==="All"?"categories__btn--active":""}" type="button">${t}</button>
        </li>
        `).join(""),q=o=>o.map(({id:t,title:s,description:c,category:r,price:e,thumbnail:d,brand:n})=>`<li class="products__item" data-id="${t}">
    <img class="products__image" src="${d}" alt="${c}"/>
    <p class="products__title">${s}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${n}</span></p>
    <p class="products__category">Category: ${r}</p>
    <p class="products__price">Price: ${e}</p>
 </li>`).join(""),w=({id:o,title:t,description:s,price:c,shippingInformation:r,returnPolicy:e,tags:d,images:n})=>`
    <img class="modal-product__img" src="${n[0]}" alt="${t}" />
      <div class="modal-product__content" data-id="${o}">
        <p class="modal-product__title">${t}</p>
        <ul class="modal-product__tags">
        ${d.map(l=>`<li>${l}</li>`)}
        </ul>
        <p class="modal-product__description">${s}</p>
        <p class="modal-product__shipping-information">Shipping:$${r}</p>
        <p class="modal-product__return-policy">Return Policy:${e}</p>
        <p class="modal-product__price">Price: ${c}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
    `,u="cart",h=JSON.parse(localStorage.getItem(u))||[],i="wishlist",P=JSON.parse(localStorage.getItem(i))||[];export{u as K,h as a,P as b,_ as c,g as d,$ as e,w as f,y as g,i as h,m as i,S as j,b as r,q as w};
//# sourceMappingURL=storage-Cpt4hJ8v.js.map
