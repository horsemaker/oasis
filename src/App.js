import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  AboutUsScreen,
  CartScreen,
  HomeScreen,
  ProductsScreen,
  SignInScreen,
  SignUpScreen,
  WishlistScreen,
} from "./frontend/screens";
import { Navbar, ResponsiveNavbar } from "./frontend/components";
import { useNavbar } from "./frontend/contexts";

function App() {
  const { showNavbar } = useNavbar();
  const appClassName = `app${showNavbar ? " overflowY-hidden" : ""}`;

  return (
    <div className={appClassName}>
      <Navbar />
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
