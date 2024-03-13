import Item from "../Item/Item";
import classes from "./ItemList.module.css";

const ItemList = ({ products }) => {
  return (
    <section className={classes.container}>
      {products.map((product) => (
        <div key={product.id} className={classes.card}>
          <Item {...product} />
        </div>
      ))}
    </section>
  );
};

export default ItemList;
