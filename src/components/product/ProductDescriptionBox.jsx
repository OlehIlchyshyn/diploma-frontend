import { Box, Typography, Divider, Button } from "@mui/material";

const ProductDescriptionBox = ({ product }) => {
  return (
    <Box>
      <Divider textAlign="center">
        <Typography variant="body1">Короткий опис</Typography>
      </Divider>
      {product.description === "" ? (
        <Typography textAlign={"center"} py={1}>
          {product.description}На жаль, короткий опис цього товару відсутній :(
        </Typography>
      ) : (
        <Typography textAlign={"left"} py={1}>
          {product.description}
        </Typography>
      )}
      <Box textAlign={"center"}>
        <Button
          variant="text"
          href="#techSpecs"
          size="small"
          style={{ color: "grey" }}
          margin={3}
        >
          Переглянути технічні характеристики
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDescriptionBox;
