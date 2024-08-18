import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Home from "./components/main/home/Home";
import Header from "./components/header/Header";
import AboutCart from "./components/main/about-cart/AboutCart";
import Footer from "./components/footer/Footer";

function App() {
  const [filters, setFilters] = useState({
    selectedBrand: "",
    selectedColor: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  filters={filters}
                  handleFilterChange={handleFilterChange}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about-cart/:id" element={<AboutCart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
