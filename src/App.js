import React from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
     <Nav/>
     <Header/>
     <Main/>
     <Testimonials/>
     <About/>
     <Footer/>
    </div>
  );
};

export default App;
