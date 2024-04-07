import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/hooks/useNotification"
import { useAsync } from "../../hooks/useAsync"
import { getProductById } from "../../services/firebase/firestore/products"
import classes from './ItemDetailContainer.module.css'
const ItemDetailContainer = () => {
    
    const { itemId } = useParams()

    const asyncFunction = () => getProductById(itemId)

    const { data: product, loading, error} = useAsync(asyncFunction, [itemId])

    if(loading) {
        return <h1>Se esta cargando el producto...</h1>
    }

    if(error) {
        return <h1>Hubo un error obteniendo el producto.</h1>
    }
    
    return (
        <div className={classes.main}>
            <h1 className={classes.title}>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer

