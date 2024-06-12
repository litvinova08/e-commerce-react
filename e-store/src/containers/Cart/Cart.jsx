import styles from "./Cart.module.scss";
import Product from "../../components/Product/Product";
import { countSum, getAllCart, removeAllCartItems } from "../../services/cart";
import { useState, useEffect } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";

const Cart = ({}) => {
  const [sum, setSum] = useState(0);

  //useState to get the list of all products in the cart
  const [cartProducts, setCartProducts] = useState([]);

  const clearCart = async () => {
    await removeAllCartItems();
    const allCartProducts = await getAllCart();
    setCartProducts(allCartProducts);
    setSum(0);
    console.log("cart cleared");
  };

  useEffect(() => {
    const wrapper = async () => {
      const allCartProducts = await getAllCart();
      setCartProducts(allCartProducts);

      const sum = allCartProducts.reduce(
        (acc, product) => acc + product.quantity * product.price,
        0
      );
      setSum(sum);
      console.log("cart use effect worked");
    };
    wrapper();
  }, []);

  return (
    <div>
      <div className={styles.Cart}>
        {cartProducts &&
          cartProducts.map((cartProduct) => {
            return <CartProduct key={cartProduct.id} product={cartProduct} />;
          })}
      </div>
      <div className={styles.Div}>
        <p>Amount to pay: ${sum}</p>
        <button className={styles.Button} onClick={clearCart}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Cart;
