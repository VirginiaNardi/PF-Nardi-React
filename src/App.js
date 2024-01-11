import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/checkout/checkout';
// import {db} from './config/firebase'
// import { collection, getDocs } from 'firebase/firestore';
// import { useEffect,useState } from 'react';
 

import "bulma/css/bulma.css"
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      {/* <ItemListContainer greeting={'Bienvenidos a Spice Bazaar'}/>
      <ItemDetailContainer/> */}
    </div>
  );
}

export default App;
