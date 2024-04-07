import { Link } from "react-router-dom";
import classes from "./Item.module.css"; 

const Item = ({ id, name, img, price, description, category }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        console.log('Hice click en item');
    };

    return (
        <div className={classes.item} onClick={handleClick}>
            <div className={classes.imageContainer}>
                <img src={img} alt={name} className={classes.image} />
            </div>
            <div className={classes.details}>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.price}>Precio: ${price}</p>
                <p className={classes.description}>Descripción: {description}</p>
                <p className={classes.category}>Categoría: {category}</p>
                <Link className={classes.link} to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    );
};

export default Item;
