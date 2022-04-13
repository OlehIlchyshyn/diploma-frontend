import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductTile = (props) => {
  const { product } = props;
  return (
    <Grid item xs={4}>
      <Card style={{ height: "100%" }} sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          style={{
            width: "auto",
            margin: "auto",
            maxHeight: "200px",
          }}
          image={product.imageUrl}
          alt={product.fullName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.includes("</") ||
            product.description.includes("/>")
              ? ""
              : product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/products/${product.id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductTile;
