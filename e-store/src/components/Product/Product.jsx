import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <NavLink to={`/products/${product.id}`}>
      <div className={styles.Product}>
        <h3>{product.name}</h3>
        <img className={styles.Img} src={product.img} alt="img" />
        <p>
          {product.quantity} {product.name}s in stock
        </p>
        <p>
          ${product.price} per {product.name}
        </p>
        <p>{product.favourite}</p>
        <p>{product.variants}</p>
      </div>
    </NavLink>
  );
};

export default Product;
