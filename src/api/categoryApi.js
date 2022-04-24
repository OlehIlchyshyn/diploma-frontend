import API from "./index";

const URL = "/categories";

export const fetchCategoryById = async (categoryId) => {
  const res = await API.get(URL + `/${categoryId}`);
  return res.data;
};
