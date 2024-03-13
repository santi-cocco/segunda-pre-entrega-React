import { Link } from "react-router-dom";
import classes from "./Item.module.css";

const Item = ({ id, name, category, price, img }) => {
  return (
    <article className={classes.item}>
      <div className={classes.imageContainer}>
        <img src={img} alt={name} className={classes.image} />
      </div>
      <div className={classes.details}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.category}>Categoría: {category}</p>
        <p className={classes.price}>${price}</p>
        <Link to={`/item/${id}`} className={classes.link}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
};

export default Item;
