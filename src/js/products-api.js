import axios from 'axios';
import { hideLoader, showLoader } from './helpers';

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

export const getProductsAll = async () => {
  try{
    const {data} = await axios.get("https://dummyjson.com/products");
    return data.total
  }catch{
    
  }
};

export const getProdByCaterogy = async(target, currentPage = 1 ) =>{
    showLoader()
  try{
      const {data} = await axios.get(`/category/${target}?limit=12&skip=${(currentPage - 1) * 12}`)

      return data.products
    } catch{

    }
    finally{
      hideLoader()
    }
}

export const getProdById = async(id)=>{
    const {data} = await axios.get(`/${id}`)
    return data
}

export const getProductByName = async (value, currentPage = 1)=>{
    const {data} = await axios.get(`/search?q=${value}&limit=12&skip=${(currentPage - 1) * 12}`);
    return data.products
}