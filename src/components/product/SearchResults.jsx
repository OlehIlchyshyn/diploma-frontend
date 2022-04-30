import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchProductsByTitle } from "../../api/productApi";
import ProductList from "./ProductList";

const SearchResults = () => {
  const [productList, setProductList] = useState([]);
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState("Сервіс порівняння цін на товари");

  useEffect(() => {
    if (searchParams.has("q")) {
      requestSearchResults(searchParams.get("q"));
      setTitle("Результат пошуку");
    }
  }, [searchParams]);

  async function requestSearchResults(query) {
    fetchProductsByTitle(query).then((products) => setProductList(products));
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ProductList productList={productList} />
    </>
  );
};

export default SearchResults;
