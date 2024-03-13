import{ useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import classes from "../ItemDetailContainer/ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
           .then(result => {
              setProduct(result)
           })
    }, [itemId])

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Detalle de producto </h1>
      <ItemDetail {...product} />
    </main>
  )
}

export default ItemDetailContainer