import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './App.css';
import Booking from './Components/Booking';
import Header from './Components/Header';

function App() {
  return (
    <div>
     <Nav/>
     <Header/>
     <Booking/>
     <Footer/>
    </div>
  );
};

export default App;