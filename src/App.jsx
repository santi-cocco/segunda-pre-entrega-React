import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import { NotificationProvider } from './notification/NotificationsService'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'
import { useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from './services/firebase/firebaseConfig'
import Nosotros from './components/Nosotros/Nosotros'



const App = () => {

  useEffect(() => {
    const products = [
      {
          id: '1',
          name: 'Remera básica',
          price: '15.000',
          category: 'remeras',
          img: 'https://source.unsplash.com/600x600/?remera',
          stock: 10,
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
          name: 'Remera a Rayas',
          price: '23.000',
          category: 'remeras',
          img: 'https://source.unsplash.com/600x600/?remera',
          stock: 30,
          description: 'Remera deportiva transpirable, ideal para actividades físicas.'
        },
        {
          id: '5',
          name: 'Pantalones cargo',
          price: '50.000',
          category: 'pantalones',
          img: 'https://source.unsplash.com/600x600/?pantalon',
          stock: 20,
          description: 'Pantalones cargo duraderos y versátiles, ideales para actividades al aire libre.'
        },
        {
          id: '7',
          name: 'Pantalones deportivos',
          price: '40.000',
          category: 'pantalones',
          img: 'https://source.unsplash.com/600x600/?pantalon',
          stock: 25,
          description: 'Pantalones deportivos ligeros y transpirables, ideales para entrenamientos y actividades físicas.'
        },
        {
          id: '8',
          name: 'Pantalones nike',
          price: '40.000',
          category: 'pantalones',
          img: 'https://source.unsplash.com/600x600/?pantalon',
          stock: 25,
          description: 'Pantalones deportivos ligeros y transpirables, ideales para entrenamientos y actividades físicas.'
        },
        {
          id: '9',
          name: 'Zapatillas running',
          price: '80.000',
          category: 'zapatillas',
          img: 'https://source.unsplash.com/600x600/?zapatillas',
          stock: 30,
          description: 'Zapatillas de running cómodas y con excelente amortiguación, ideales para correr largas distancias.'
        },
        {
          id: '10',
          name: 'Zapatillas deportivas',
          price: '70.000',
          category: 'zapatillas',
          img: 'https://source.unsplash.com/600x600/?zapatillas',
          stock: 25,
          description: 'Zapatillas deportivas versátiles y modernas, ideales para cualquier tipo de actividad física.'
        },
        {
          id: '11',
          name: 'Zapatillas casual',
          price: '60.000',
          category: 'zapatillas',
          img: 'https://source.unsplash.com/600x600/?zapatillas',
          stock: 35,
          description: 'Zapatillas casuales cómodas y estilosas, perfectas para el uso diario.'
        },
        {
          id: '12',
          name: 'Zapatillas deportivas',
          price: '70.000',
          category: 'zapatillas',
          img: 'https://source.unsplash.com/600x600/?zapatillas',
          stock: 25,
          description: 'Zapatillas deportivas versátiles y modernas, ideales para cualquier tipo de actividad física.'
        },
  ]
  
    const productsCollection = collection(db, 'products')
    
    products.forEach(async prod => {
        console.log('addDoc')
        await addDoc(productsCollection, prod)
    })
  }, [])


  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
              <Navbar />
              <Routes>
                   <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
                   <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Filtra por categoria'}/>}/>
                   <Route path='/product/:productId' element={<ItemDetailContainer />}/>
                   <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                   <Route path='/cart' element={<CartView/>}/>
                   <Route path='/checkout' element={<Checkout/>}/>
                   <Route path='/nosotros' element={<Nosotros/>} />
              </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
