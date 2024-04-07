import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import styles from './CartView.module.css'; 

const CartView = () => {
    const { cart, total, clearCart } = useContext(CartContext);

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className={styles.container}> 
            <h1 className={styles['main-title']}>Carrito</h1>

            {
                cart.map((prod) => (
                    <div className={styles['product-item']} key={prod.id}>
                        <img src={prod.img} alt={prod.name} className={styles['product-image']} />
                        <h3 className={styles['product-title']}>{prod.name}</h3>
                        <p className={styles['product-price']}>Precio unit: ${prod.price}</p>
                        <p className={styles['product-price']}>Precio total: ${parseFloat(prod.price.replace(/\./g, '').replace(',', '.')) * parseInt(prod.quantity)}</p>
                        <p className={styles['product-quantity']}>Cantidad: {prod.quantity}</p>
                    </div>
                ))
            }

            {  
                cart.length > 0 ?
                <>
                    <h2 className={styles['main-title']}>Precio total: ${total}</h2>
                    <button onClick={handleClearCart} className={styles['main-button']}>Vaciar</button>
                    <Link to="/checkout" className={styles['main-link']}>Finalizar compra</Link>
                </> :
                <h2 className={styles['main-title']}>El carrito está vacío </h2>
            }
        </div>
    );
};

export default CartView;
