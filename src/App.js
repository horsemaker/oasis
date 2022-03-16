import "./App.css";
import { Footer, Navbar, ResponsiveNavbar } from "./frontend/components";
import { useNavbar } from "./frontend/contexts";
import { Router } from "./frontend/routes/Router";

function App() {
  const { showNavbar } = useNavbar();
  const appClassName = `app${showNavbar ? " overflowY-hidden" : ""}`;

  return (
    <div className={appClassName}>
      <Navbar />
      <ResponsiveNavbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
