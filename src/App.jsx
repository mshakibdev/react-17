import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Route, Routes } from "react-router-dom";
import Detail from "./Details";
import Cart from "./Cart";
import { useState } from "react";
export default function App() {
  const [cart, setCart] = useState([]);
  function addToCart(id, sku) {
    // function form of setState
    setCart((items) => {
      const itemInCart = items.find((item) => item.sku === sku);
      /* 
      items is current state which is automatically provided by React in
      function form of setState update
      */
      if (itemInCart) {
        /* if item exist in array return new array with hte matching item replaced */
        return items.map((item) =>
          item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // return new object append to existing array
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }

  function updateQuantity(sku, quantity) {
    setCart((items) => {
      return items.map((item) =>
        item.sku === sku
          ? { ...item, quantity }
          : item
      );
    });
  }
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to home page !</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={<Detail addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} updateQuantity={updateQuantity} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
