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

//add a new product to the cart
export const addProduct = async (data, id) => {
  try {
    getCartProductsById(id);
    const docRef = doc(db, "cart", id);
    await updateDoc(docRef, {
      quantity: increment(1),
    });
  } catch (e) {
    const { favourite, img, name, price, quantity, variants } = data;
    const product = { favourite, img, name, price, quantity: 1, variants };
    const collectionRef = doc(db, "cart", id);
    const newDoc = await setDoc(collectionRef, product);
    return newDoc;
  }
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

  const prices = data.map((doc) => {
    const price = doc.price;
    const quant = doc.quantity;
    return price * quant;
  });
  const rsl = prices.reduce((a, b) => {
    return a + b;
  });
  return rsl;
};

//remove all products from the cart
export const cleanCart = async () => {};
