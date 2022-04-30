import API from "./index";

const URL = "/products";

export const fetchProductById = async (productId) => {
  const res = await API.get(URL + `/${productId}`);
  return res.data;
};

export const fetchProducts = async (pageNumber, pageSize, sorting) => {
  const res = await API.get(URL, {
    params: { page: pageNumber, size: pageSize, sort: sorting },
  });
  return res.data;
};

export const fetchProductsByCategoryId = async (
  categoryId,
  pageNumber,
  pageSize,
  sorting
) => {
  const res = await API.get(URL, {
    params: {
      categoryId: categoryId,
      page: pageNumber,
      size: pageSize,
      sort: sorting,
    },
  });
  return res.data;
};

export const fetchProductsByTitle = async (query) => {
  const res = await API.get(URL + `/search?query=${query}`);
  return res.data;
};
