import API from "./index";

const URL = "/catalog/basic";

const fetchCategories = async () => {
  const res = await API.get(URL);
  return res.data.categoryList;
};

export const getCategories = async () => {
  let categories = await fetchCategories();
  return categories.map((category) => {
    const subcategories = category.subCategories.map((subcategory) => {
      return { title: subcategory.title, id: subcategory.id };
    });
    return {
      title: category.title,
      items: subcategories,
    };
  });
};
