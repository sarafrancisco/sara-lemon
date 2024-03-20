import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
   <Router>
    <div>
     <Nav/>
     <Main/>
     <Footer/>
    </div>
  </Router>
  );
};

export default App;