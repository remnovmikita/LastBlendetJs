export const writeCatalog = arr => {
  return arr
    .map(
      x =>
        `
        <li class="categories__item">
        <button class="categories__btn" type="button">${x}</button>
        </li>
        `
    )
    .join('');
};

export const writeProducts = arr => {
  return arr.map(
    ({
      id,
      title,
      description,
      category,
      price,
      thumbnail,
      brand,
    }) => `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${description}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}</p>
 </li>
`
  );
};
