const products = [
    {
        id: '1',
        name: 'Remera básica',
        price: '15.000',
        category: 'remeras',
        img: 'https://source.unsplash.com/600x600/?remera',
        stock: 50,
        description: 'Remera básica de algodón, disponible en varios colores.'
      },
      {
        id: '2',
        name: 'Remera estampada',
        price: '20.000',
        category: 'remeras',
        img: 'https://source.unsplash.com/600x600/?remera',
        stock: 40,
        description: 'Remera con estampado gráfico moderno, perfecta para el día a día.'
      },
      {
        id: '3',
        name: 'Remera deportiva',
        price: '25.000',
        category: 'remeras',
        img: 'https://source.unsplash.com/600x600/?remera',
        stock: 30,
        description: 'Remera deportiva transpirable, ideal para actividades físicas.'
      },
      {
        id: '4',
        name: 'Pantalones cargo',
        price: '50.000',
        category: 'pantalones',
        img: 'https://source.unsplash.com/600x600/?pantalon',
        stock: 20,
        description: 'Pantalones cargo duraderos y versátiles, ideales para actividades al aire libre.'
      },
      {
        id: '5',
        name: 'Pantalones de vestir',
        price: '60.000',
        category: 'pantalones',
        img: 'https://source.unsplash.com/600x600/?pantalon',
        description: 'Pantalones de vestir elegantes y cómodos, perfectos para ocasiones formales.'
      },
      {
        id: '6',
        name: 'Pantalones deportivos',
        price: '40.000',
        category: 'pantalones',
        img: 'https://source.unsplash.com/600x600/?pantalon',
        stock: 25,
        description: 'Pantalones deportivos ligeros y transpirables, ideales para entrenamientos y actividades físicas.'
      },
      {
        id: '7',
        name: 'Zapatillas running',
        price: '80.000',
        category: 'zapatillas',
        img: 'https://source.unsplash.com/600x600/?zapatillas',
        stock: 30,
        description: 'Zapatillas de running cómodas y con excelente amortiguación, ideales para correr largas distancias.'
      },
      {
        id: '8',
        name: 'Zapatillas deportivas',
        price: '70.000',
        category: 'zapatillas',
        img: 'https://source.unsplash.com/600x600/?zapatillas',
        stock: 25,
        description: 'Zapatillas deportivas versátiles y modernas, ideales para cualquier tipo de actividad física.'
      },
      {
        id: '9',
        name: 'Zapatillas casual',
        price: '60.000',
        category: 'zapatillas',
        img: 'https://source.unsplash.com/600x600/?zapatillas',
        stock: 35,
        description: 'Zapatillas casuales cómodas y estilosas, perfectas para el uso diario.'
      }
]

export const getProducts = () =>{
    return new Promise((resolve) => {
       setTimeout(() => {
         resolve(products)
    }, 100)
 })
}

export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId))
    }, 1000)
})
}

export const getProductById = (itemId) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id === itemId))
    }, 100)
})
}

