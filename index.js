import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-BJ9gahTP.js";a.defaults.baseURL="https://dummyjson.com/products";const u=async()=>{const{data:t}=await a.get("/category-list");return["All",...t]},d=async(t=1)=>{const s=`?limit=12&skip=${(t-1)*12}`,{data:c}=await a.get(s);return c.products},o={categories:document.querySelector(".categories"),products:document.querySelector(".products")},l=t=>t.map(s=>`
        <li class="categories__item">
        <button class="categories__btn" type="button">${s}</button>
        </li>
        `).join(""),_=t=>t.map(({id:s,title:c,description:r,category:e,price:n,thumbnail:i,brand:p})=>`<li class="products__item" data-id="${s}">
    <img class="products__image" src="${i}" alt="${r}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${p}</span></p>
    <p class="products__category">Category: ${e}</p>
    <p class="products__price">Price: ${n}</p>
 </li>
`);g();async function g(){const t=await u();o.categories.innerHTML=l(t);const s=await d();o.products.innerHTML=_(s)}
//# sourceMappingURL=index.js.map
