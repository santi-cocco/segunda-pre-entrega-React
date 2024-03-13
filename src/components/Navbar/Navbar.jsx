import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import classes from "../Navbar/Navbar.module.css"
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className={classes.header}>
       <img className={classes.logo} src={logo} alt="Logo de la empresa " />
       <nav>      
            <Link to="/" className={classes.btn} href="#inicio">Inicio</Link>
            <a className={classes.btn} href="#acerca-de">Nosotros</a>
            <a className={classes.btn} href="#contacto">Contacto</a>
        </nav>
        <h1 className={classes.title}  lang="en">MODERNMARKET</h1>
        <div>
            <CartWidget />
        </div>
    </header>
  )
}

export default Navbar

