import {
  TablePagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchProducts, fetchProductsByCategoryId } from "../../api/productApi";
import { fetchCategoryById } from "../../api/categoryApi";
import ProductList from "./ProductList";

const PageableProductList = () => {
  const [productList, setProductList] = useState([]);
  let params = useParams();
  const [title, setTitle] = useState("Сервіс порівняння цін на товари");
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemsCount, setItemsCount] = useState(0);
  const [sorting, setSorting] = useState("none");

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    let categoryId = params.categoryId;
    let sortParam = sorting === "none" ? "" : sorting;
    if (categoryId !== undefined) {
      requestCategoryDetails(categoryId);
      requestProductListByCategory(categoryId, page, itemsPerPage, sortParam);
    } else {
      setTitle("Всі товари");
      requestProductList(page, itemsPerPage, sortParam);
    }
  }, [params.categoryId, page, itemsPerPage, sorting]);

  async function requestProductListByCategory(
    categoryId,
    pageNumber,
    pageSize,
    sorting
  ) {
    fetchProductsByCategoryId(categoryId, pageNumber, pageSize, sorting).then(
      (response) => {
        setProductList(response.content);
        setItemsCount(response.totalElements);
      }
    );
  }

  async function requestProductList(pageNumber, pageSize, sorting) {
    fetchProducts(pageNumber, pageSize, sorting).then((response) => {
      setProductList(response.content);
      setItemsCount(response.totalElements);
    });
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
      <Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <FormControl sx={{ m: 2, mb: 3, mx: 6, minWidth: 250 }}>
            <InputLabel>Сортування</InputLabel>
            <Select
              value={sorting}
              label="Сортування"
              onChange={handleChange}
              autoWidth
            >
              <MenuItem value={"none"}>За замовчуванням</MenuItem>
              <MenuItem value={"fullName,asc"}>По алфавіту</MenuItem>
              <MenuItem value={"averagePrice,asc"}>
                Від дешевих до дорогих
              </MenuItem>
              <MenuItem value={"averagePrice,desc"}>
                Від дорогих до дешевих
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <ProductList productList={productList} />
        <TablePagination
          component="div"
          count={itemsCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[3, 6, 10, 25, 50]}
          showFirstButton
          showLastButton
          sx={{
            marginTop: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Box>
    </>
  );
};

export default PageableProductList;
