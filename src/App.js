import logo from "./logo.svg";
import { motion } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
