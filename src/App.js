import logo from './logo.svg';
import './App.css';
import Product from './productapi';
import "bootstrap/dist/css/bootstrap.min.css"
import Productpost from './productpost';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Productput from './put';
import Productdata from './put';
import ProductDelete from './delete';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <div className='w-100 d-flex justify-content-center'>
        <Link class="btn btn-success m-1" to="/">Product List</Link>
        <Link class="btn btn-primary  m-1" to="/productPost">Product Create</Link>
        <Link class="btn btn-info m-1" to="/update">Update Product</Link>
        <Link class="btn btn-warning m-1" to="/ProductDelete">ProductDelete</Link>
      </div>
      <div>
        
      </div>
        <Routes>
          <Route path='/' element={<Product />}></Route>
          <Route path='/productPost' element={<Productpost />}></Route>
          <Route path='/update'element={<Productdata/>}></Route>
          <Route path='/ProductDelete'element={<ProductDelete/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
