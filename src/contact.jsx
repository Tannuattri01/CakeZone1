import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Contact() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#1c1919] text-white px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h1>
      </div>

      {/* Contact Info Cards */}
      <div className="relative bg-[#0a0a0acc] min-h-[500px] mt-[100px] px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-evenly gap-10 md:gap-4 items-center">
          {/* Card 1 - Location */}
          <div className="relative h-[180px] w-full md:w-[420px]">
            <div className="absolute bottom-[100px] bg-amber-500 h-full w-full">
              <div className="border border-white absolute h-[150px] w-[90%] top-4 left-4 p-4 flex flex-col justify-center items-center text-center">
                <h1
                  className="text-2xl text-black font-extrabold"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  📍 Location
                </h1>
                <p className="text-white mt-2 text-lg">123 Sweet Street, Caketown</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Email */}
          <div className="relative h-[180px] w-full md:w-[420px]">
            <div className="absolute bottom-[100px] bg-amber-500 h-full w-full">
              <div className="border border-white absolute h-[150px] w-[90%] top-4 left-4 p-4 flex flex-col justify-center items-center text-center">
                <h1
                  className="text-2xl text-black font-extrabold"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  📧 Email
                </h1>
                <p className="text-white mt-2 text-lg">contact@cakezone.com</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Call */}
          <div className="relative h-[180px] w-full md:w-[420px]">
            <div className="absolute bottom-[100px] bg-amber-500 h-full w-full">
              <div className="border border-white absolute h-[150px] w-[90%] top-4 left-4 p-4 flex flex-col justify-center items-center text-center">
                <h1
                  className="text-2xl text-black font-extrabold"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  📞 Call
                </h1>
                <p className="text-white mt-2 text-lg">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
          <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">Get In Touch</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-orange-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:border-orange-500"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 rounded-md text-black py-2 px-6 border-2 border-amber-700 hover:bg-transparent hover:border-orange-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img className="h-[90px]" src="/cake-log1.png" alt="CakeZone Logo" />
            <p className="mt-4 text-sm">
              Taste the best cakes in town with love and passion. Baked fresh daily!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Email: info@cakezone.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Bakery St, Sweetland</p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="cursor-pointer hover:text-orange-400" />
              <FaInstagram className="cursor-pointer hover:text-orange-400" />
              <FaTwitter className="cursor-pointer hover:text-orange-400" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link to="/menu" className="hover:text-orange-400">Menu</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <Link to="/subscribe">
              <button className="bg-orange-500 hover:bg-transparent text-white border-2 border-amber-700 mt-3 transition py-2 px-4 w-full">
                Subscribe
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center text-sm flex-wrap gap-4">
          <p className="text-center sm:text-left w-full sm:w-auto">
            © 2025 CakeZone. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-amber-500 p-3 rounded-full transition"
            title="Back to top"
          >
            <FaArrowUp className="text-white text-lg" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
