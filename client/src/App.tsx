import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategories/ShopCategory";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import LoginSignup from "./Pages/LoginSignUp/LoginSignup";

function App() {

  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="mens" banner={men_banner}/>} />
        <Route path="/womens" element={<ShopCategory category="womens" banner={women_banner}/>} />
        <Route path="/kids" element={<ShopCategory category="kids" banner={kids_banner}/>} />
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="*" element={<Error />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
