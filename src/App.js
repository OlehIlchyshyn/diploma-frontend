import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Box } from "@mui/material";
import ProductList from "./components/product/ProductList";
import Product from "./components/product/Product";
import { Main } from "./Main";
import { DrawerHeader } from "./DrawerHeader";
import CustomAppBar from "./components/navigation/CustomAppBar";
import CustomDrawer from "./components/navigation/CustomDrawer";

export const drawerWidth = 300;

const App = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CustomAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <CustomDrawer
        open={open}
        setOpen={setOpen}
        handleDrawerClose={handleDrawerClose}
        drawerWidth={drawerWidth}
      />
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route
            path="products/categories/:categoryId"
            element={<ProductList />}
          />
          <Route path="products/:productId" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Main>
    </Box>
  );
};

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

const About = () => {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
    </>
  );
};

export default App;
