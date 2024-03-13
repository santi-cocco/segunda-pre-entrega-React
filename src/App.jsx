import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer  greeting={'Bienvenido, encontra tu estilo en ModernMarket.'}/>}/>   
        <Route path='/category/:categoryId' element={<ItemListContainer  greeting={'Producto de la categoria'}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes> 
     </BrowserRouter>  
    </>
  )
}

export default App
