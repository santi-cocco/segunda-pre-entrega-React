import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { useNotification } from '../../notification/hooks/useNotification'
import classes from './ItemDetail.module.css'

const InputCount = ({ onAdd, stock, initial= 1 }) => {
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)
    }

    return (
        <div>
            <p className={classes.number}>{count}</p>
            <button  className={classes.button} onClick={decrement}>-</button>
            <button className={classes.button} onClick={increment}>+</button>
            <button className={classes.button} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const [inputType, setInputType] = useState('button')

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const { addItem, isInCart } = useContext(CartContext)

    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd)
        showNotification('success', `Se agrego correctamente ${quantity} ${name}`)

        addItem(objProductToAdd)
    }

    return (
        <article className={classes.item}>
             <button className={classes.button} onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <picture >
                <img src={img} alt={name} className={classes.image}/>
            </picture>
            <header>
                <h2 className={classes.name}>
                    {name}
                </h2>
            </header>
            <section className={classes.details}>
                <p className={classes.category}>
                    Categoria: {category}
                </p >
                <p className={classes.description}>
                    Descripción: {description}
                </p>
                <p className={classes.price}>
                    Precio: {price}
                </p>
            </section>           
            <footer  className={classes.footer}>
                {
                    !isInCart(id) ? (
                        <ItemCount  className={classes.footer} onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <>
                            <Link className={classes.option} to='/cart'>Finalizar compra</Link>
                        </>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
