export const writeCatalog = arr => {
  return arr
    .map(
      x => 
        `
        <li class="categories__item">
        <button class="categories__btn ${x === "All" ? "categories__btn--active" : ""}" type="button">${x}</button>
        </li>
        `
    )
    .join('');
};

export const writeProducts = arr => {
  return arr.map(({id,title,description,category,price,thumbnail,brand}) => 
    `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${description}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}</p>
 </li>`).join('');
};

export const writemodalById = ({id,title,description,price,shippingInformation,returnPolicy,tags,images,}) =>{
    return `
    <img class="modal-product__img" src="${images[0]}" alt="${title}" />
      <div class="modal-product__content" data-id="${id}">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">
        ${tags.map(tag => `<li>${tag}</li>`)}
        </ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping:$${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${returnPolicy}</p>
        <p class="modal-product__price">Price: ${price}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
    `
}