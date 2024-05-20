import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import CheckOut from './pages/CheckOut';
import Compare from './pages/Compare';
import Shop from './pages/Shop';
import Blogs from './pages/Blogs';
import Error404 from './pages/Error404';
import BlogsSingle from './pages/BlogsSingle';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgetPass from './pages/ForgetPass';
import ScrollToTop from './components/scrollToTop';

import './Css/header-footer.css'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productName" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<ForgetPass />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/blog/:blogName" element={<BlogsSingle />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AppRoutes />
  // </React.StrictMode>
);