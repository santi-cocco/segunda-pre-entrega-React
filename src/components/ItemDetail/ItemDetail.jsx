import ItemCount from "../ItemCount/ItemCount"
import classes from "../ItemDetail/ItemDetail.module.css"

const ItemDetail = ({ name, category, price, img, description, stock}) => {
    return (
      <article className={classes.item}>
          <img src={img} alt={name} className={classes.image}/>
        <div className={classes.details}>
          <h3 className={classes.name}> {name}</h3>         
          <h4 className={classes.category}>categoria: {category}</h4>
          <h4 className={classes.description}>{description}</h4>
          <h4 className={classes.price}>'${price}'</h4>
        </div>
          <ItemCount stock={stock} />
      </article>
    )
  }
  
export default ItemDetail