import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./frontend/components/Navbar/Navbar";
import ResponsiveNavbar from "./frontend/components/ResponsiveNavbar/ResponsiveNavbar";
import HomeScreen from "./frontend/screens/HomeScreen/HomeScreen";
import AboutUsScreen from "./frontend/screens/AboutUsScreen/AboutUsScreen";
import ProductsScreen from "./frontend/screens/ProductsScreen/ProductsScreen";
import CartScreen from "./frontend/screens/CartScreen/CartScreen";
import WishlistScreen from "./frontend/screens/WishlistScreen/WishlistScreen";
import SignInScreen from "./frontend/screens/SignInScreen/SignInScreen";
import SignUpScreen from "./frontend/screens/SignUpScreen/SignUpScreen";
import { useNavbar } from "./frontend/contexts/navbar-context";

function App() {
  const { showNavbar } = useNavbar();
  const appClassName = `app${showNavbar ? " overflowY-hidden" : ""}`;

  return (
    <div className={appClassName}>
      <Header />
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/aboutus" element={<AboutUsScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/wishlist" element={<WishlistScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </div>
  );
}

export default App;
