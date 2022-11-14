// APP.js
import "./App.css";
import AuthPage from "./pages/AuthPage";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Allproducts from "./pages/AllProducts";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import SignupPage from "./pages/SignUpPage";
import PaymentForm from "./pages/PaymentForm";
import NewProductPage from "./pages/NewProductPage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";


// Create App component.
function App() {
  // Variable to hold the state of the component.
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState({});

  // search page products
  const [searchProducts, setSearchProducts] = useState(null);

  const params = useParams();
  const categoryparams = params.category;
  useEffect(() => {
    setCategory(categoryparams);
  }, []);

  return (
    <div className="App">
      <>
        <NavBar
          user={user}
          setUser={setUser}
          cart={cart}
          setCategory={setCategory}
          setSearchProducts={setSearchProducts}
        />
        <Routes>
          <Route path="/" element={<Navigate replace to="/api/products" />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/login"
            element={<AuthPage setUser={setUser} user={user} />}
          />
          <Route
            path="/signup"
            element={<SignupPage setUser={setUser} user={user} />}
          />
          <Route
            path="/api/products"
            element={<Allproducts setCart={setCart} cart={cart} />}
          />
          <Route
            path="/api/products/:category"
            element={<Detail setCart={setCart} cart={cart} category={category} />}
          />
          <Route path="/:category/:id/update" element={<EditPage />} />
          <Route
            path="/api/products/:category/new"
            element={<NewProductPage />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          />
          {/* search page route */}
          <Route
            path="/api/products/search/:searchTerm"
            element={
              <SearchPage
                setCart={setCart}
                cart={cart}
                searchTerm={searchProducts}
              />
            }
          />
          <Route
            path="/payments"
            element={<PaymentForm cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
