import "./App.css";
import { Footer, Navbar, ResponsiveNavbar } from "./frontend/components";
import { useNavbar } from "./frontend/contexts";
import { NavRoutes } from "./frontend/routes";

function App() {
  const { showNavbar } = useNavbar();
  const appClassName = `app${showNavbar ? " overflowY-hidden" : ""}`;

  return (
    <div className={appClassName}>
      <Navbar />
      <ResponsiveNavbar />
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;
