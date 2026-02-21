
export const writeCatalog = (arr) =>{
    return arr.map((x)=>
        `
        <li class="categories__item">
        <button class="categories__btn" type="button">${x}</button>
        </li>
        `
    ).join("");
}
