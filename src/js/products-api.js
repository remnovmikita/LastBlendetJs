import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export const getCatalog = async () => {
  const { data } = await axios.get('/category-list');
  const res = ['All', ...data];
  return res;
};

export const getProducts = async (currentPage = 1) => {
  const url = `?limit=12&skip=${(currentPage - 1) * 12}`;
  const { data } = await axios.get(url);

  return data.products;
};
