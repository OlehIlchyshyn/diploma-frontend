import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const ProductTile = (props) => {
  const { product } = props;
  return (
    <Container>
      <Link to={`/products/${product.id}`}>{product.fullName}</Link>
    </Container>
  );
};

export default ProductTile;
