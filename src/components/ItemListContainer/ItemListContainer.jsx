import { useEffect, useState } from "react";
import classes from './ItemListContainer.module.css'; 
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Define la variable de estado error

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then(result => {
        setProducts(result);
      })
      .catch(error => {
        setError(error); // Captura y guarda el error en el estado
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando los productos...</h1>;
  }

  if (error) {
    return <h1>Error: No se pudieron cargar los productos</h1>;
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>{greeting}</h1>
      <nav>
            <Link to='/category/remeras' className={classes.btn}>Remeras </Link>
            <Link to='/category/pantalones' className={classes.btn}>Pantalones</Link>
            <Link to='/category/zapatillas' className={classes.btn}>Zapatillas</Link>
      </nav>
      <ItemList products={products} className={classes.itemList} />
    </main>
  );
};

export default ItemListContainer;
