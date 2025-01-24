
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
import { UserProvider, ProtectedRoutes, PublicRoutes } from './context/UserContext.jsx';

function App() {
  return (
    <SelectedPizzaProvider>
      <UserProvider>
        <CartProvider>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home/>} />
              <Route path="/login" element={<PublicRoutes><LoginPage/></PublicRoutes>} />
              <Route path="/register" element={<PublicRoutes><RegisterPage /></PublicRoutes>} />
            
              <Route path="/profile" element={ <ProtectedRoutes> <Profile /> </ProtectedRoutes>} />
             
              <Route path="/cart" element={ <Cart /> } />
              <Route path="/pizza/:id" element={<Pizza/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer />
        </CartProvider>
      </UserProvider>
    </SelectedPizzaProvider>
  );
}

export default App;
