import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './App.css';

import BookingForm from './Components/BookingForm';

function App() {
  return (
    <div>
     <Nav/>
     <BookingForm/>
     <Footer/>
    </div>
  );
};

export default App;