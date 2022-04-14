import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, fetchProductsByCategoryId } from "../../api/productApi";
import ProductTile from "./ProductTile";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  let params = useParams();

  useEffect(() => {
    let categoryId = params.categoryId;
    if (categoryId === undefined) {
      requestProductList();
    } else {
      requestProductListByCategory(categoryId);
    }
  }, [params.categoryId]);

  async function requestProductListByCategory(categoryId) {
    fetchProductsByCategoryId(categoryId).then((products) =>
      setProductList(products)
    );
  }

  async function requestProductList() {
    fetchProducts().then((products) => setProductList(products));
  }

  return productList.length === 0 ? (
    <div>No products</div>
  ) : (
    <Grid container spacing={3} paddingX={5}>
      {productList.map((product) => (
        <ProductTile product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default ProductList;
