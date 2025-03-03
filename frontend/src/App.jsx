import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/collection";
import { About } from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import PlaceOrder from "./pages/PlaceOrder";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <ToastContainer />
    <Navbar />
    <SearchBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/product/:productId" element={<Product />} />{" "}
      {/* ✅ Fixed */}
      <Route path="/placeOrder" element={<PlaceOrder />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
