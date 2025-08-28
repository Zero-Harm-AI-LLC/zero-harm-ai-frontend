import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Donate";
import Docs from "./pages/Docs";
import { useEffect } from "react";
import { API_ENDPOINTS } from "./config";

function App() {
  useEffect(() => {
    fetch(API_ENDPOINTS.HEALTH_CHECK).catch(() => {});
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
