import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/product/ProductList";
import Product from "./components/product/Product";
import "./App.css";
import NavBar from "./components/navigation/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
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
    </div>
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
