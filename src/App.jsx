import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Location from "./pages/Location";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
