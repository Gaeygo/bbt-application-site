import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import {  Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Page404 from "./components/_404"

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404/>} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
