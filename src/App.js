import "./App.css";
import { Footer, Navbar } from "./frontend/components";
import { Router } from "./frontend/routes/Router";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
