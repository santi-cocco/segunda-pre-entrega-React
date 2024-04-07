import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import classes from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.free}>
        <p>Envío GRATIS en compras hasta $10.000</p>
      </div>
      <div className={classes.main_header}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h2 onClick={() => navigate('/')}>Modern Market</h2>
          </div>
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <ul>
              <li>
                <Link to='/' className={classes.link}>Inicio</Link>
              </li>
              <li>
                <Link to='/nosotros' className={classes.link}>Nosotros</Link>
              </li>
              <li>
                <Link to='/category/remeras' className={classes.link}>Remeras</Link>
              </li>
              <li>
                <Link to='/category/pantalones' className={classes.link}>Pantalones</Link>
              </li>
              <li>
                <Link to='/category/zapatillas' className={classes.link}>Zapatillas</Link>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
