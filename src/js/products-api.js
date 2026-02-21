import axios from "axios"

const URL = "https://dummyjson.com/products/category-list"

export const getCatalog = async () =>{
    const {data} = await axios.get(URL);
    const res = ["All", ...data];
    return res
}

