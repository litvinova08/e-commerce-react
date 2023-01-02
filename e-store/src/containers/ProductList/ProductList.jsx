import Product from "../../components/Product/Product";
import styles from "./ProductList.module.scss";
import { NavLink } from "react-router-dom";

const ProductList = ({ products }) => {
	return (
		// <NavLink to={`/products`}>
		<div className={styles.ProductList}>
			{products &&
				products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
		</div>
		// </NavLink>
	);
};

export default ProductList;
