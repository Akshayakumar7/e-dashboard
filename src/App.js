import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from '../src/components/privateComponent'
import Login from './components/Login';
import AddProducts from './components/AddProducts';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProducts />} />
            <Route path='/update/:id' element={<h1>{<UpdateProduct />}</h1>} />
            <Route path='/logout' element={<h1>logout Component</h1>} />
            <Route path='/profile' element={<h1>Profile Component</h1>} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
