import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-BJ9gahTP.js";c.defaults.baseURL="https://dummyjson.com/products";const f=async()=>{const{data:t}=await c.get("/category-list");return["All",...t]},m=async(t=1)=>{const e=`?limit=12&skip=${(t-1)*12}`,{data:a}=await c.get(e);return a.products},b=async(t,e=1)=>{const{data:a}=await c.get(`/category/${t}?limit=12&skip=${(e-1)*12}`);return a.products},v=async t=>{const{data:e}=await c.get(`/${t}`);return e},C=async(t,e=1)=>{const{data:a}=await c.get(`/search?q=${t}&limit=12&skip=${(e-1)*12}`);return a.products},o={categories:document.querySelector(".categories"),products:document.querySelector(".products"),div:document.querySelector("div.not-found"),modalContent:document.querySelector("div.modal-product"),modal:document.querySelector("div.modal"),btnClose:document.querySelector(".modal__close-btn"),form:document.querySelector(".search-form"),btnCart:document.querySelector(".modal-product__btn--cart"),spanProd:document.querySelector("span.nav__count")},$=t=>t.map(e=>`
        <li class="categories__item">
        <button class="categories__btn ${e==="All"?"categories__btn--active":""}" type="button">${e}</button>
        </li>
        `).join(""),u=t=>t.map(({id:e,title:a,description:n,category:r,price:i,thumbnail:d,brand:l})=>`<li class="products__item" data-id="${e}">
    <img class="products__image" src="${d}" alt="${n}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${l}</span></p>
    <p class="products__category">Category: ${r}</p>
    <p class="products__price">Price: ${i}</p>
 </li>`).join(""),L=({id:t,title:e,description:a,price:n,shippingInformation:r,returnPolicy:i,tags:d,images:l})=>`
    <img class="modal-product__img" src="${l[0]}" alt="${e}" />
      <div class="modal-product__content" data-id="${t}">
        <p class="modal-product__title">${e}</p>
        <ul class="modal-product__tags">
        ${d.map(y=>`<li>${y}</li>`)}
        </ul>
        <p class="modal-product__description">${a}</p>
        <p class="modal-product__shipping-information">Shipping:$${r}</p>
        <p class="modal-product__return-policy">Return Policy:${i}</p>
        <p class="modal-product__price">Price: ${n}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
    `,g="cart",s=JSON.parse(localStorage.getItem(g))||[];async function w(t){let e;const a=t.target;a.classList.contains("categories__btn")&&(o.categories.querySelectorAll("button").forEach(n=>n.classList.remove("categories__btn--active")),a.textContent==="All"?e=await m():e=await b(t.target.textContent),e.length===0&&o.div.classList.add("not-found--visible"),a.classList.add("categories__btn--active"),o.products.innerHTML=u(e))}o.btnClose.addEventListener("click",p);o.modal.addEventListener("click",t=>{t.target===t.currentTarget&&p()});function _(t){t.key==="Escape"&&p()}function p(){o.modal.classList.remove("modal--is-open"),window.removeEventListener("keydown",_)}async function S(t){t.preventDefault();const e=t.target.elements.searchValue.value;if(e.trim()==="")return;const a=await C(e);a.length===0?o.products.innerHTML="":o.products.innerHTML=u(a),o.div.classList.toggle("not-found--visible",a.length===0),t.target.reset()}async function k(t){const e=t.target.closest("li");if(!e)return;const a=await v(e.dataset.id),n=e.dataset.id;o.modalContent.innerHTML=L(a),console.log(n),o.modal.classList.add("modal--is-open"),s.includes(n)?o.btnCart.textContent="Remove from Cart":o.btnCart.textContent="Add to Cart",window.addEventListener("keydown",_)}function h(){const t=o.modal.querySelector(".modal-product__content").dataset.id;if(s.includes(t)){const e=s.indexOf(t);s.splice(e,1),o.btnCart.textContent="Add to Cart"}else s.push(t),o.btnCart.textContent="Remove from Cart";localStorage.setItem(g,JSON.stringify(s)),o.spanProd.textContent=s.length,console.log(s)}P();async function P(){const t=await f();o.categories.innerHTML=$(t);const e=await m();o.products.innerHTML=u(e)}o.categories.addEventListener("click",w);o.products.addEventListener("click",k);o.form.addEventListener("submit",S);o.btnCart.addEventListener("click",h);
//# sourceMappingURL=index.js.map
