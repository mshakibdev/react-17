import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Route, Routes } from "react-router-dom";
import Detail from "./Details";
import Cart from "./Cart";
export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to home page !</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
