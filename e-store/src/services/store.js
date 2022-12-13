//store functions to interact with Firestore

import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firestore";

//function to get all products
export const getAllProducts = async() => {
    const collectionRef = collection(db, "store");
    const querySnapshot = await getDocs(collectionRef);

    const data = querySnapshot.docs.map(doc => {
        const id = doc.id;
        const restOfData = doc.data();
        return {id, ...restOfData};
    });

    console.log(data);
    return data;
}

//