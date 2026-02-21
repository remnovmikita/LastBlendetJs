import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-BJ9gahTP.js";const s="https://dummyjson.com/products/category-list",a=async()=>{const{data:t}=await e.get(s);return["All",...t]},c={categories:document.querySelector(".categories")},n=t=>t.map(o=>`
        <li class="categories__item">
        <button class="categories__btn" type="button">${o}</button>
        </li>
        `).join("");r();async function r(){const t=await a();c.categories.innerHTML=n(t)}
//# sourceMappingURL=index.js.map
