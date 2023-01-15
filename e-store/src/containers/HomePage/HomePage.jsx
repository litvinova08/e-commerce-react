import React from "react";
import ProductList from "../ProductList/ProductList";
import Carousel from "../Carousel/Carousel";
import styles from "./HomePage.module.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const HomePage = () => {
  const { products1 } = useContext(ProductContext);

  return (
    <div className={styles.Home}>
      <Carousel products1={products1} />
    </div>
  );
};

export default HomePage;
