import logo from './logo.svg';
import {motion} from "framer-motion"
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Footer/>
    </div>
  );
}

export default App;
