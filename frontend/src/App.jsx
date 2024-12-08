import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"


function App() {
  return (
  <>
    <Navbar/>
    
    {/*<Home/>
    <RegisterPage/>
    <LoginPage/>
    <Cart/>
    */}
    <Pizza/>
    <Footer/>
  </>
  )
}

export default App