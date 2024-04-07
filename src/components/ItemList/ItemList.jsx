import Item from "../Item/Item";
import classes from "./ItemList.module.css";

const ItemList = ({ products }) => {
    return (
        <section className={classes.container}>
            <div className={classes.main} onClick={() => console.log('hice click en itemlist')}>
                {
                    products?.map((product) => {
                        return <Item key={product.id} {...product}/>
                    })
                }
            </div>
        </section>
    );
}

export default ItemList;


