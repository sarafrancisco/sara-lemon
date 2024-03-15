import React from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Highlights from './Components/Highlights';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
     <Nav/>
     <Header/>
     <Highlights/>
     <About/>
     <Testimonials/>
     <Footer/>
    </div>
  );
};

export default App;
