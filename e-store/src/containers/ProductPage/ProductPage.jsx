import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { decrementProduct, getProductById } from "../../services/store.js";
import { addProduct } from "../../services/cart.js";
import Product from "../../components/Product/Product.jsx";
import styles from "./ProductPage.module.scss";

const ProductPage = ({ products }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  //update quantity in real time
  const [quantity, setQuantity] = useState(product.quantity);

  //if there is product in stock -> decrement quantity in store & increment quantity in cart
  const decrementProductAmount = async () => {
    try {
      const decrementResult = await decrementProduct(id);
      if (decrementResult) {
        await addProduct(product, id);
        setQuantity(product.quantity);
        console.log("product page: product added");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const wrapper = async () => {
      const data = await getProductById(id);
      setProduct(data);
      setQuantity(product.quantity);
      console.log("prodct page use effect done");
    };
    wrapper();
  }, [id, quantity]); //product deleted

  return product ? (
    <div>
      <Product product={product} />
      <button className={styles.Button} onClick={decrementProductAmount}>
        ADD
      </button>
    </div>
  ) : (
    <div>
      <p>Product not found</p>
    </div>
  );
};

export default ProductPage;
