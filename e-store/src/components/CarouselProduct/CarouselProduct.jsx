import styles from "./CarouselProduct.module.scss";
import { NavLink } from "react-router-dom";

const CarouselProduct = ({ product }) => {
  return (
    <div className={styles.Product}>
      <NavLink to={`/products/${product.id}`}>
        <h3>
          {product.name} - ${product.price}
        </h3>{" "}
      </NavLink>
      <img className={styles.Img} src={product.img} alt="img" />
      <p>{product.favourite}</p>
    </div>
  );
};

export default CarouselProduct;
