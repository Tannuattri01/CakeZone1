import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Pricing() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#1c1919] text-white px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Menu & Pricing</h1>
      </div>

      {/* Cakes Section */}
      <div className="px-4 md:px-12 mt-14">
        {/* Heading */}
        <h1 className="text-center text-[32px] sm:text-[40px] lg:text-[60px] font-extrabold text-orange-400 font-[Great_Vibes]">
          Menu & Pricing
        </h1>
        <h1
          className="text-center text-[28px] sm:text-[40px] lg:text-[60px] font-extrabold"
          style={{ fontFamily: "'Baloo 2', cursive" }}
        >
          Explore Our Cakes
        </h1>

        {/* Cake Category Selector */}
        <div className="bg-[#131313e8] h-auto py-6 w-full sm:w-[400px] mx-auto mt-10 rounded-lg">
          <div className="border border-white py-4 px-4 mx-4 flex justify-around items-center text-white text-lg sm:text-2xl rounded-lg">
            {["Birthday", "Wedding", "Custom"].map((type) => (
              <h1
                key={type}
                className="hover:bg-amber-500 px-2 py-1 rounded cursor-pointer transition-all"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                {type}
              </h1>
            ))}
          </div>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {[
            { image: "/images/cake-1.jpg", title: "Birthday Cake" },
            { image: "/images/cake-2.jpg", title: "Wedding Cake" },
            { image: "/images/cake-3.jpg", title: "Custom Cake" },
            { image: "/images/cake-1.jpg", title: "Birthday Cake" },
            { image: "/images/cake-2.jpg", title: "Wedding Cake" },
            { image: "/images/cake-3.jpg", title: "Custom Cake" },
          ].map((cake, index) => (
            <div
              key={index}
              className="flex gap-4 sm:gap-5 hover:bg-pink-100 cursor-pointer p-2 rounded-xl transition"
            >
              <img
                src={cake.image}
                alt={cake.title}
                className="w-24 sm:w-24 lg:w-36 object-cover rounded-lg"
              />
              <div>
                <h1
                  className="text-lg sm:text-xl font-bold"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  {cake.title}
                </h1>
                <p className="text-gray-600 text-sm">
                  Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="relative mt-20">
        <img className="w-full h-[380px] object-cover" src="/images/offer.jpg" alt="Special Offer" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center opacity-100 p-4">
          <h1 className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold text-orange-400 font-[Great_Vibes]">
            Special Kombo Pack
          </h1>
          <h1
            className="text-center text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold text-white"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Super Crispy Cakes
          </h1>
          <p className="text-xl text-white text-center w-[90%] sm:w-[80%] lg:w-[50%] mx-auto mt-4">
            Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.
          </p>
          <div className="flex gap-10 mt-6 justify-center">
            <Link to="/shop">
              <button className="h-[45px] w-[130px] md:h-[50px] md:w-[140px] text-[16px] md:text-[19px] bg-orange-500 hover:bg-transparent text-white border-2 border-amber-700 transition">
                Shop Now
              </button>
            </Link>
            <Link to="/read">
              <button className="bg-transparent border-2 border-white text-white py-2 px-6 hover:bg-white hover:text-black transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img className="h-[90px]" src="/images/cake-log1.png" alt="CakeZone Logo" />
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
            <p className="mb-4 text-sm">Subscribe to get the latest updates & offers.</p>
            <button className="bg-orange-500 hover:bg-transparent text-white border-2 border-amber-700 mt-3 transition py-2 px-4 w-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center text-sm flex-wrap gap-4">
          <p className="text-center sm:text-left w-full sm:w-auto">
            © 2025 CakeZone. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="bg-amber-500 p-3 rounded-full transition" title="Back to top">
            <FaArrowUp className="text-white text-lg" />
          </button>
        </div>
      </footer>
    </div>
  );
}
