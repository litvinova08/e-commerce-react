//store functions to interact with Firestore product database

import {
	doc,
	updateDoc,
	collection,
	getDocs,
	getDoc,
	increment,
} from "firebase/firestore";
import { db } from "../../firestore";

//function to get all products from the store
export const getAllProducts = async () => {
	const collectionRef = collection(db, "store");
	const querySnapshot = await getDocs(collectionRef);
	const data = querySnapshot.docs.map((doc) => {
		const id = doc.id;
		const restOfData = doc.data();
		return { id, ...restOfData };
	});
	return data;
};

//get product by ID
export const getProductById = async (id) => {
	const docRef = doc(db, "store", id);
	const docSnap = await getDoc(docRef);
	if (!docSnap.exists()) {
		throw new Error("Product not found");
	}
	return { id: docSnap.id, ...docSnap.data() };
};

// if there is some product in stock, the function returns true and decrement product amount
//returns false if no product in stock
export const decrementProduct = async (id) => {
	const docRef = doc(db, "store", id);
	const product = await getProductById(id);
	if (product.quantity <= 0) {
		return false;
	} else {
		await updateDoc(docRef, {
			quantity: increment(-1),
		});
		return true;
	}
};
