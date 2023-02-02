import PageListProduct from "../../components/PageListProduct/PageListProduct";
import styles from "./ProductList.module.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const ProductList = () => {
  const { products1 } = useContext(ProductContext);

  return (
    <div className={styles.ProductList}>
      {products1 &&
        products1.map((product) => {
          return <PageListProduct key={product.id} product={product} />;
        })}
    </div>
  );
};

export default ProductList;
