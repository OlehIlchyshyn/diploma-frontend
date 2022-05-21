import { useState, useEffect } from "react";
import { Container, Divider, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Carousel from "react-material-ui-carousel";
import ProductList from "./components/product/ProductList";
import { fetchProducts } from "./api/productApi";
import { Box } from "@mui/system";

const carouselItems = [
  {
    title: "Ukraine",
    image: "https://hurma.work/wp-content/uploads/2022/03/hrm_2.jpg",
  },
  {
    title: "Laptops",
    image:
      "https://pyxis.nymag.com/v1/imgs/956/5db/38bc1d91ee2321c6868bd5300d3b7959a2-best-college-laptops.2x.rsocial.w600.jpg",
  },
  {
    title: "Smartphones",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-smartphones-2022-1646858128.jpg?crop=1.00xw:0.69xh;0,0.0570xh&resize=1200:*",
  },
  {
    title: "Price trend",
    image:
      "https://i.pinimg.com/originals/4f/1d/69/4f1d69018176870ca7a94c1e8a50c824.jpg",
  },
];

const CarouselItem = ({ title, imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt={title}
      style={{
        height: "auto",
        width: "100%",
        maxHeight: "500px",
        borderRadius: "10px",
        objectFit: "cover",
      }}
    />
  );
};

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    requestRandomProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestRandomProducts() {
    fetchProducts(0, 9, "").then((response) => {
      let randomPage = getRandomInt(response.totalPages);
      fetchProducts(randomPage, 9, "").then((response) => {
        setProductList(response.content);
      });
    });
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <Box>
      <Helmet>
        <title>Сервіс порівння цін на товари</title>
      </Helmet>
      <Typography variant="h4" gutterBottom textAlign={"center"} mb={3}>
        Вітаємо на порталі сервісу порівняння цін та характеристик товарів!
      </Typography>
      <Container maxWidth="xl">
        <Carousel style={{ height: "350px !important" }}>
          {carouselItems.map((item) => (
            <CarouselItem
              title={item.title}
              imageUrl={item.image}
              key={item.title}
            />
          ))}
        </Carousel>
        <Divider style={{ margin: 32 }} textAlign="center">
          <Typography variant="h5">Випадкові товари</Typography>
        </Divider>
        <ProductList productList={productList} />
      </Container>
    </Box>
  );
};

export default Home;
