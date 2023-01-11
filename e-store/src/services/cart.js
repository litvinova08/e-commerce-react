//store functions to interact with Firestore cart

import { async } from "@firebase/util";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  getDoc,
  increment,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firestore";

//function to get all products from the cart
export const getAllCart = async () => {
  const collectionRef = collection(db, "cart");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();
    return { id, ...restOfData };
  });
  return data;
};

//get product by ID from the cart
export const getCartProductsById = async (id) => {
  const docRef = doc(db, "cart", id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  }
  return { id: docSnap.id, ...docSnap.data() };
};

// to update the cart
export const addProduct = async (data, id) => {
  const productRef = await getCartProductsById(id);
  console.log(await getCartProductsById(id));
  if (productRef === null) {
    addNewProductToCart(data, id);
  } else {
    updateProductInCart(id);
  }
};

//to add a new product to cart
export const addNewProductToCart = async (data, id) => {
  const { favourite, img, name, price, quantity, variants } = data;
  const product = { favourite, img, name, price, quantity: 1, variants };
  const collectionRef = doc(db, "cart", id);
  const newDoc = await setDoc(collectionRef, product);
  return newDoc;
};

//to update product quantity in the cart
export const updateProductInCart = async (id) => {
  getCartProductsById(id);
  const docRef = doc(db, "cart", id);
  await updateDoc(docRef, {
    quantity: increment(1),
  });
};

//update existing record , increment amount of product in the cart
export const incrementProductinCart = async (id) => {
  const docRef = doc(db, "cart", id);

  await updateDoc(docRef, {
    quantity: increment(1),
  });
};

//calculate sum of the purchase
export const countSum = async () => {
  const collectionRef = collection(db, "cart");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();
    return { id, ...restOfData };
  });

  if (data.length > 0) {
    const prices = data.map((doc) => {
      const price = doc.price;
      const quant = doc.quantity;
      return price * quant;
    });
    const rsl = prices.reduce((acc, curr) => acc + curr, 0);
    return rsl;
  } else {
    console.log("no values");
  }
};

//remove a product from the cart
export const removeProduct = async (id) => {
  const docRef = doc(db, "cart", id);
  await deleteDoc(docRef);
};

export const removeAllCartItems = async () => {
  const cartProducts = await getAllCart();
  cartProducts.map((product) => removeProduct(product.id));
};
