
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import { CartProvider } from "./context/CartContext";
import { SelectedPizzaProvider } from "./context/PizzaContext";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <SelectedPizzaProvider>
      <CartProvider>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer />
      </CartProvider>
    </SelectedPizzaProvider>
  );
}

export default App;
