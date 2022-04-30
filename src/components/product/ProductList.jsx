import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  fetchProducts,
  fetchProductsByCategoryId,
  fetchProductsByTitle,
} from "../../api/productApi";
import ProductTile from "./ProductTile";
import { fetchCategoryById } from "../../api/categoryApi";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  let params = useParams();
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState("Сервіс порівняння цін на товари");

  useEffect(() => {
    let categoryId = params.categoryId;
    if (searchParams.has("q")) {
      requestSearchResults(searchParams.get("q"));
      setTitle("Результат пошуку");
    } else if (categoryId !== undefined) {
      requestProductListByCategory(categoryId);
      requestCategoryDetails(categoryId);
    } else {
      requestProductList();
      setTitle("Всі товари");
    }
  }, [params.categoryId, searchParams]);

  async function requestProductListByCategory(categoryId) {
    fetchProductsByCategoryId(categoryId).then((products) =>
      setProductList(products)
    );
  }

  async function requestProductList() {
    fetchProducts().then((products) => setProductList(products));
  }

  async function requestSearchResults(query) {
    fetchProductsByTitle(query).then((products) => setProductList(products));
  }

  async function requestCategoryDetails(categoryId) {
    fetchCategoryById(categoryId).then((category) => {
      setTitle(category.title);
    });
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {productList.length === 0 ? (
        <div>No products</div>
      ) : (
        <Grid container spacing={3} paddingX={5}>
          {productList.map((product) => (
            <ProductTile product={product} key={product.id} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductList;
