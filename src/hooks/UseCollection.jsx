import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React from 'react'



export const UseCollection = (collectionName) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, collectionName);
        getDocs(productsCollection)
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((error) => { console.log(error) })
            .finally(() => setLoading(false));
    }, []);

    return { products , loading};


}

export default UseCollection