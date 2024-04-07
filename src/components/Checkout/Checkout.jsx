import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import styles from "./Checkout.module.css";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const { cart, total, clearCart } = useContext(CartContext);
    const [orderDetails, setOrderDetails] = useState(null);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const createOrder = async () => {
        try {
            setLoading(true);
            const objOrder = {
                buyer: userData,
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);

            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;

            docs.forEach(doc => {
                const data = doc.data();
                const stockDb = data.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...data });
                }
            });

            if(outOfStock.length === 0) {
                batch.commit();

                const orderCollection = collection(db, 'orders');
                const { id } = await addDoc(orderCollection, objOrder);
                
                setOrderDetails(objOrder); 
                setOrderId(id); 
                clearCart();
            } else {
                console.error('Hay productos que no tienen stock disponible');
            }
        } catch (error) {
            console.error('Hubo un error en la generación de la orden');
        } finally {
            setLoading(false);
        }
    };

    if(orderId) {
        return (
            <div className={styles.container}>
                <h1>Orden generada con éxito</h1>
                <h2>Detalles de la orden:</h2>
                <p className={styles.info}>Nombre: {orderDetails.buyer.name}</p>
                <p className={styles.info}>Email: {orderDetails.buyer.email}</p>
                <p className={styles.info}>Teléfono: {orderDetails.buyer.phone}</p>
                <h3>Productos comprados:</h3>
                <ul className={styles.productList}>
                    {orderDetails.items.map(item => (
                        <li key={item.id}>{item.name} - Cantidad: {item.quantity}</li>
                    ))}
                </ul>
                <p className={styles.info}>Total: ${orderDetails.total}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1>Checkout</h1>
            <form className={styles.form} onSubmit={createOrder}>
                <label className={styles.label}>
                    Nombre:
                    <input type="text" name="name" value={userData.name} onChange={handleChange} required className={styles.input} />
                </label>
                <label className={styles.label}>
                    Email:
                    <input type="email" name="email" value={userData.email} onChange={handleChange} required className={styles.input} />
                </label>
                <label className={styles.label}>
                    Teléfono:
                    <input type="tel" name="phone" value={userData.phone} onChange={handleChange} required className={styles.input} />
                </label>
                <button type="submit" className={styles.button}>Generar orden de compras</button>
            </form>
        </div>
    );
};

export default Checkout;



