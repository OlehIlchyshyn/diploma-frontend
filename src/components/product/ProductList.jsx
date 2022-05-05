import { Grid, Typography } from "@mui/material";
import ProductTile from "./ProductTile";

const ProductList = ({ productList }) => {
  return productList.length === 0 ? (
    <Typography variant="h3" textAlign={"center"}>No products</Typography>
  ) : (
    <Grid container spacing={3} paddingX={5}>
      {productList.map((product) => (
        <ProductTile product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default ProductList;
