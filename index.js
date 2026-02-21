import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-BJ9gahTP.js";c.defaults.baseURL="https://dummyjson.com/products";const p=async()=>{const{data:s}=await c.get("/category-list");return["All",...s]},r=async(s=1)=>{const t=`?limit=12&skip=${(s-1)*12}`,{data:e}=await c.get(t);return e.products},g=async(s,t=1)=>{const{data:e}=await c.get(`/category/${s}?limit=12&skip=${(t-1)*12}`);return e.products},o={categories:document.querySelector(".categories"),products:document.querySelector(".products"),div:document.querySelector("div.not-found")},_=s=>s.map(t=>`
        <li class="categories__item">
        <button class="categories__btn ${t==="All"?"categories__btn--active":""}" type="button">${t}</button>
        </li>
        `).join(""),n=s=>s.map(({id:t,title:e,description:a,category:i,price:l,thumbnail:d,brand:u})=>`<li class="products__item" data-id="${t}">
    <img class="products__image" src="${d}" alt="${a}"/>
    <p class="products__title">${e}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${u}</span></p>
    <p class="products__category">Category: ${i}</p>
    <p class="products__price">Price: ${l}</p>
 </li>
`);m();async function m(){const s=await p();o.categories.innerHTML=_(s);const t=await r();o.products.innerHTML=n(t)}o.categories.addEventListener("click",y);async function y(s){let t;const e=s.target;e.classList.contains("categories__btn")&&(o.categories.querySelectorAll("button").forEach(a=>a.classList.remove("categories__btn--active")),console.log(e.textContent),e.textContent==="All"?t=await r():t=await g(s.target.textContent),t.length===0&&o.div.classList.add("not-found--visible"),e.classList.add("categories__btn--active"),o.products.innerHTML=n(t),console.log(o.div))}
//# sourceMappingURL=index.js.map
