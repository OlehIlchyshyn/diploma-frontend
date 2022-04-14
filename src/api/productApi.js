import API from "./index";

const URL = "/products";

export const fetchProductById = async (productId) => {
  const res = await API.get(URL + `/${productId}`);
  return res.data;
};

export const fetchProducts = async () => {
  const res = await API.get(URL + "/");
  return res.data;
};

export const fetchProductsByCategoryId = async (categoryId) => {
  const res = await API.get(URL + `/categories/${categoryId}`);
  return res.data;
};
