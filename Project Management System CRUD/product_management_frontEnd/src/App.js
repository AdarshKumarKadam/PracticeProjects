import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; 
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/editProduct/:id' element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App
