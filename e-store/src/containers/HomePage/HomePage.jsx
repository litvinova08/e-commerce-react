import React from "react";
import ProductList from "../ProductList/ProductList";
import Carousel from "../Carousel/Carousel";
import styles from "./HomePage.module.scss";

const HomePage = ({ products }) => {
  return (
    <div className={styles.Home}>
      <Carousel products={products} />
    </div>
  );
};

export default HomePage;
