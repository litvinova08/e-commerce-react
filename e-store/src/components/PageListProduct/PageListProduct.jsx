import styles from "../../components/Product/Product.module.scss";
import { NavLink } from "react-router-dom";

const PageListProduct = ({ product }) => {
  return (
    <div className={styles.Product}>
      <NavLink to={`/products/${product.id}`}>
        <h3>{product.name}</h3>{" "}
      </NavLink>
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
  );
};

export default PageListProduct;
