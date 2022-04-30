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
      if (subcategory.subCategories.length !== 0) {
        const subsubcategories = subcategory.subCategories.map(
          (subSubCategory) => {
            return {
              title: subSubCategory.title,
              id: subSubCategory.id,
              to: `/products/categories/${subSubCategory.id}`,
            };
          }
        );
        return {
          title: subcategory.title,
          items: subsubcategories,
        };
      }
      return {
        title: subcategory.title,
        id: subcategory.id,
        to: `/products/categories/${subcategory.id}`,
      };
    });
    return {
      title: category.title,
      items: subcategories,
    };
  });
};
