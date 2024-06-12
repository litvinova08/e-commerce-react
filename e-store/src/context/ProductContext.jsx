import { createContext, useState } from "react";
import { getAllProducts } from "../services/store";

// create Context method
export const ProductContext = createContext();

// context provider, so components can subscribe to it

const ProductContextProvider = ({ children }) => {
  //set some state
  const [products1, setProducts] = useState([]);

  const wrapper = async () => {
    const allProducts = await getAllProducts();
    setProducts(allProducts);
    console.log("ProductContextProvider");
  };
  wrapper();

  return (
    <ProductContext.Provider value={products1}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
