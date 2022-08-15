
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Ourvideos from './components/Ourvideos';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
     <About/>
     <Ourvideos/>
     <Contact/>
     <Footer/> 
   
    </div>
  );
}

export default App;
