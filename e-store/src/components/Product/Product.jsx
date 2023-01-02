import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<NavLink to={`/products/${product.id}`}>
			<div className={styles.Product}>
				<h3>{product.name}</h3>
				<img src={product.img} alt="img" />
				<p>{product.quantity}</p>
				<p>{product.price}</p>
				<p>{product.favourite}</p>
				<p>{product.variants}</p>
			</div>
		</NavLink>
	);
};

export default Product;
