import { memo } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"
import classes from './ItemListContainer.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {                               
    const { categoryId } = useParams()
    
    const asyncFunction = () =>  getProducts(categoryId)
    
    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])
    
    if(loading) {
        return <h1>Se estan cargando los productos...</h1>
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    return (
        <div  className={classes.main} onClick={() => console.log('hice click en itemlistcontainer')}>
            <h1 className={classes.title}>{ greeting }</h1>
            <ItemListMemoized className={classes.itemList} products={products}/>
        </div>
    )
}

export default ItemListContainer

