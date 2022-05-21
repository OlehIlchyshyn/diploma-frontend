import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Product from "./components/product/Product";
import { Main } from "./Main";
import { DrawerHeader } from "./DrawerHeader";
import CustomAppBar from "./components/navigation/CustomAppBar";
import CustomDrawer from "./components/navigation/CustomDrawer";
import SearchResults from "./components/product/SearchResults";
import PageableProductList from "./components/product/PageableProductList";
import Home from "./Home";
import About from "./About";

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
          <Route path="search" element={<SearchResults />} />
          <Route path="products" element={<PageableProductList />} />
          <Route
            path="products/categories/:categoryId"
            element={<PageableProductList />}
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

export default App;
