import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";


function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/pizza/p001" element={<Pizza/>}/>
      <Route path="/profile" element={<Profile/>}/> 
      <Route path="*" element={<NotFound/>}/>         
    </Routes>
    <Footer/>
  </>
  )
}

export default App