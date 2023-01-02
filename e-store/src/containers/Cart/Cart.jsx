import styles from "./Cart.module.scss";
// import { NavLink } from "react-router-dom";
import Product from "../../components/Product/Product";
import { countSum } from "../../services/cart";
import { useState, useEffect } from "react";

const Cart = ({ cartProducts }) => {
	const [sum, setSum] = useState(0);

	useEffect(() => {
		const wrapper = async () => {
			const sumOfPurchase = await countSum();
			setSum(sumOfPurchase);
			console.log(sumOfPurchase);
		};
		wrapper();
	}, []);

	return (
		<div className={styles.Cart}>
			{cartProducts &&
				cartProducts.map((cartProduct) => {
					return <Product key={cartProduct.id} product={cartProduct} />;
				})}
			<p>Amount to pay: ${sum}</p>
		</div>
	);
};

export default Cart;
