import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import Header from './components/Header';
import About from './components/About';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>} />
         <Route path="/home" element={<Homepage/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/hero" element={<Hero/>} />
        <Route path="/reservations" element={<BookingPage/>} />
      </Routes>
      {/* <Homepage />
      <BookingPage /> */}
    </div>
    </Router>
  );
}

export default App;
