import "./index.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Product from "./components/Product/Product";
import HomePage from "./containers/HomePage/HomePage";
import ProductList from "./containers/ProductList/ProductList";
import { getAllProducts } from "./services/store";
import ProductPage from "./containers/ProductPage/ProductPage";
import Nav from "./components/Nav/Nav";
import Cart from "./containers/Cart/Cart";
import { getAllCart } from "./services/cart";

function App() {
  //usestate to get the list of all products in store
  const [products, setProducts] = useState([]);

  //use Effect because product cards should be rendered when the page is opened the first time
  useEffect(() => {
    const wrapper = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
      console.log("App use effect");
    };
    wrapper();
  }, []);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<HomePage products={products} />} />
          <Route
            path="/products"
            element={<ProductList products={products} />}
          />
          <Route
            path="/products/:id"
            element={<ProductPage products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
