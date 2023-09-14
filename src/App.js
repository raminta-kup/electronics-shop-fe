import { styled } from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./globalStyles.js";
import { Checkout } from "./components/checkout/Checkout";
import { ProductDisplay } from "./components/ProductDisplay";
import { HomePage } from "./components/HomePage";
import { PageNotFound } from "./components/PageNotFound";
import { Routes, Route, } from "react-router-dom";
import { ProductPage } from "./components/ProductPage";
import CartContext, { CartProvider } from "./CartContext";

function App() {

  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <Header />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/headphones" element={<ProductPage productCategory="headphones" />} />
          <Route path="/headphones/:slug" element={<ProductDisplay />} />
          <Route path="/earphones" element={<ProductPage productCategory="earphones" />} />
          <Route path="/earphones/:slug" element={<ProductDisplay />} />
          <Route path="/speakers" element={<ProductPage productCategory="speakers" />} />
          <Route path="/speakers/:slug" element={<ProductDisplay />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App;
