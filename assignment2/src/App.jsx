import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';
import ProductContext from './context/ProductContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState(['PS5', 'Xbox', 'Switch'])

  return (       
    <ProductContext.Provider value={{ products, setProducts }}>
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/add-product' element={<NewProductForm />} />
      </Routes>
    </ProductContext.Provider>                   
 )
}

export default App

{/**/}