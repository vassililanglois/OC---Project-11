import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Location from "./components/Location";
import About from "./components/About";
import NotFound from "./components/NotFound";

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
