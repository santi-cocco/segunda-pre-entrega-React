import React from 'react';
import classes from './Nosotros.module.css';

const Nosotros = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Nosotros</h1>
      <p className={classes.description}>
       En nuestra tienda de venta de ropa, nos esforzamos por ofrecer las últimas tendencias de moda para hombres, mujeres y niños. Desde elegantes conjuntos de ropa formal hasta prendas casuales para el día a día, tenemos una amplia selección para satisfacer todos los estilos y gustos.
       Nuestro objetivo es proporcionar a nuestros clientes una experiencia de compra excepcional, donde puedan encontrar no solo prendas de alta calidad, sino también un servicio al cliente excepcional. Estamos comprometidos con la satisfacción del cliente y trabajamos constantemente para mejorar y ampliar nuestra colección de ropa para satisfacer las necesidades cambiantes de nuestros clientes.
       Ya sea que estés buscando el atuendo perfecto para una ocasión especial o simplemente quieras renovar tu guardarropa con las últimas tendencias, ¡estamos aquí para ayudarte a encontrar lo que necesitas!
      </p>
    </div>
  );
}

export default Nosotros;
