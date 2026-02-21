import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-BJ9gahTP.js";c.defaults.baseURL="https://dummyjson.com/products";const $=async()=>{const{data:o}=await c.get("/category-list");return["All",...o]},u=async(o=1)=>{const t=`?limit=12&skip=${(o-1)*12}`,{data:e}=await c.get(t);return e.products},v=async(o,t=1)=>{const{data:e}=await c.get(`/category/${o}?limit=12&skip=${(t-1)*12}`);return e.products},f=async o=>{const{data:t}=await c.get(`/${o}`);return t},s={categories:document.querySelector(".categories"),products:document.querySelector(".products"),div:document.querySelector("div.not-found"),modalContent:document.querySelector("div.modal-product"),modal:document.querySelector("div.modal"),btnClose:document.querySelector(".modal__close-btn")},w=o=>o.map(t=>`
        <li class="categories__item">
        <button class="categories__btn ${t==="All"?"categories__btn--active":""}" type="button">${t}</button>
        </li>
        `).join(""),p=o=>o.map(({id:t,title:e,description:a,category:n,price:d,thumbnail:l,brand:r})=>`<li class="products__item" data-id="${t}">
    <img class="products__image" src="${l}" alt="${a}"/>
    <p class="products__title">${e}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${r}</span></p>
    <p class="products__category">Category: ${n}</p>
    <p class="products__price">Price: ${d}</p>
 </li>
`),L=({id:o,title:t,description:e,category:a,price:n,thumbnail:d,brand:l,shippingInformation:r,returnPolicy:g,tags:_,images:y})=>`
    <img class="modal-product__img" src="${y[0]}" alt="${t}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t}</p>
        <ul class="modal-product__tags">
        ${_.map(b=>`<li>${b}</li>`)}
        </ul>
        <p class="modal-product__description">${e}</p>
        <p class="modal-product__shipping-information">Shipping:$${r}</p>
        <p class="modal-product__return-policy">Return Policy:${g}</p>
        <p class="modal-product__price">Price: ${n}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
    `;async function k(o){let t;const e=o.target;e.classList.contains("categories__btn")&&(s.categories.querySelectorAll("button").forEach(a=>a.classList.remove("categories__btn--active")),e.textContent==="All"?t=await u():t=await v(o.target.textContent),t.length===0&&s.div.classList.add("not-found--visible"),e.classList.add("categories__btn--active"),s.products.innerHTML=p(t))}C();async function C(){const o=await $();s.categories.innerHTML=w(o);const t=await u();s.products.innerHTML=p(t)}s.categories.addEventListener("click",k);s.products.addEventListener("click",E);s.btnClose.addEventListener("click",i);s.modal.addEventListener("click",o=>{o.target===o.currentTarget&&i()});async function E(o){const t=o.target.closest("li");if(!t)return;console.log(t.dataset.id);const e=await f(t.dataset.id);console.log(e),s.modalContent.innerHTML=L(e),console.log(s.modal),s.modal.classList.add("modal--is-open"),window.addEventListener("keydown",m)}function i(){s.modal.classList.remove("modal--is-open"),window.removeEventListener("keydown",m)}function m(o){o.key==="Escape"&&i()}
//# sourceMappingURL=index.js.map
