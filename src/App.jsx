import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar/Navigation.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";
import "./components/Navbar/Navbar.css";
import "./components/Hero/Hero.css";
import "./components/Footer/Footer.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
