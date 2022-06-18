import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:category' element={<ProductList />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={user ? <Navigate to="/" replace />  : <Login />} />
      <Route path='/register' element={user ? <Navigate to="/" replace />  : <Register />} />
    </Routes>
  )
}

export default App;
