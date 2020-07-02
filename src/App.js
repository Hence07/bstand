import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Homes from './components/Homes'
 import Footer from './components/Footer';
import Contact from './components/ContactComponent';
 import Products from './components/Products';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
    
      <nav className="navbar navbar-dark bg-dark text-light">Business Standard, the single stack solution more profitable, scalable and elastic for your organizational needs</nav>
     
      
      <Homes />
      <Footer />
      <Products />

    </div>
    </BrowserRouter>
  );
}

export default App;


