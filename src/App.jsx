import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
