import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Menu from './menu';
import About from './about';
import Discount from './discount';
import Team from './team';
import Special from './special';
import Clients from './clients';
import Footer from './footer';
import Us from './us';
import Pricing from './pricing';
import Chef from './chef';
import Contact from './contact'
import Shop from './shop';
import Read from './read';
import Order from './order';
import Subscribe from './subscribe';
import Track from'./track';

const HomePage = () => (
  <>
    <About />
    <Menu />
    <Discount />
    <Team />
    <Special />
    <Clients />
    <Footer />
  </>
);

// This wrapper lets us use `useLocation` with routing
const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // 🧭 get current route path

  return (
    <div className="cakezone-section">
      {/* Navbar */}
      <div className="sticky top-0 z-[999] bg-[#1c1919d1] w-full text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img src="cake-log1.png" alt="logo" className="h-[70px] md:h-[100px]" />
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <div className="flex gap-6 text-[18px]">
                <Link to="/" className="hover:text-[#e67e22]">Home</Link>
                <Link to="/us" className="hover:text-[#e67e22]">About Us</Link>
                <Link to="/pricing" className="hover:text-[#e67e22]">Menu & Pricing</Link>
                <Link to="/chef" className="hover:text-[#e67e22]">Master Chefs</Link>
                <Link to="contact" className="hover:text-[#e67e22]">Contact</Link>
              </div>
              <div className="flex gap-4 text-[20px] ml-6">
                <a href="#" className="hover:text-[#e67e22]"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-[#e67e22]"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-[#e67e22]"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-[18px]">
              <Link to="/" className="hover:text-[#e67e22]">Home</Link>
              <Link to="/us" className="hover:text-[#e67e22]">About Us</Link>
              <a href="#menu" className="hover:text-[#e67e22]">Menu & Pricing</a>
              <a href="#master" className="hover:text-[#e67e22]">Master Chefs</a>
              <a href="#contact" className="hover:text-[#e67e22]">Contact</a>
            </div>
          )}
        </div>
      </div>

      {/* Only show this on homepage */}
      {location.pathname === '/' && (
        <div className="relative">
          <img className="h-[600px] md:h-[855px] object-cover w-full" src="./images/background.jpg" alt="background" />
          <div className="absolute top-1/5 left-6 md:left-32 text-white">
            <h1 className="text-[28px] md:text-[48px] text-orange-500" style={{ fontFamily: "'Great Vibes', cursive" }}>Super Crispy</h1>
            <h1 className="text-[36px] md:text-[64px]" style={{ fontFamily: "'Pacifico', cursive" }}>CAKEZONE</h1>
            <h1 className="text-[20px] md:text-[30px] mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>The Best Cake In London</h1>
            <Link to="/read"><button className="h-[45px] w-[130px] md:h-[50px] md:w-[140px] text-[16px] md:text-[19px] bg-orange-500 hover:bg-transparent border-2 border-amber-700 transition">Read More</button></Link>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/us" element={<Us />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/subscribe" element={<Subscribe/>} />
        <Route path="/track" element={<Track/>} />
      </Routes>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
