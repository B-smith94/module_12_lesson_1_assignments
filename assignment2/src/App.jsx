import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (                          
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/add-product' element={<NewProductForm/>}/>
    </Routes>
  )
}

export default App

{/**/}