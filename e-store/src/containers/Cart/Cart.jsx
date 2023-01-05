import styles from "./Cart.module.scss";
import Product from "../../components/Product/Product";
import { countSum } from "../../services/cart";
import { useState, useEffect } from "react";

const Cart = ({ cartProducts }) => {
  const [sum, setSum] = useState(0);

  const clearCart = async () => {};

  useEffect(() => {
    const wrapper = async () => {
      const sumOfPurchase = await countSum();
      setSum(sumOfPurchase);
    };
    wrapper();
  }, []);

  return (
    <div>
      <div className={styles.Cart}>
        {cartProducts &&
          cartProducts.map((cartProduct) => {
            return <Product key={cartProduct.id} product={cartProduct} />;
          })}
      </div>
      <div className={styles.Div}>
        <p>Amount to pay: ${sum}</p>
        <button className={styles.Button} onclick={clearCart}>
          CLEAR CART
        </button>
      </div>
    </div>
  );
};

export default Cart;
