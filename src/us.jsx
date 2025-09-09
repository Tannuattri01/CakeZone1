import React from "react";
import CountUp from "react-countup";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import {  Link} from 'react-router-dom';


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Us() {
  return (
    <div >
      <div className="bg-[#1c1919] text-white px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center " >About Us</h1>
      </div>
      <div>
        <div className="px-4 md:px-12 bg-white">
          <h1 className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold text-orange-400 font-[Great_Vibes]">
            about us
          </h1>

          <h1
            className="text-center text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Welcome to Cakezone
          </h1>

          <div className="flex flex-col md:flex-row justify-evenly items-start gap-10 mt-12 ml-4 md:ml-12">
            {/* Image */}
            <div className="w-full md:w-[40%] max-h-[500px] overflow-hidden">
              <img
                src="./images/cake.jpg"
                alt="Cake"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-4 w-full md:max-w-2xl">
              <h2 className="text-base sm:text-lg md:text-xl w-full font-semibold">
                Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo
              </h2>

              <p className="text-sm sm:text-base text-gray-700 w-full">
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna
                <br />
                <br />
              </p>

              {/* Icons Section */}
              <div className="flex flex-col md:flex-row gap-8 mt-8 w-full flex-wrap">
                {/* Box 1 */}
                <div className=" w-full md:w-[45%]">
                  <div className="bg-orange-400 w-[100px] h-32 relative flex justify-center items-center">
                    <div className="border border-white absolute h-24 w-20 top-4 left-2 flex justify-center items-center">
                      <i className="fas fa-heart-crack text-white text-3xl"></i>
                    </div>
                  </div>
                  <div className="max-w-sm">
                    <h1 className="text-lg font-bold">100% Healthy</h1>
                    <p className="text-sm text-gray-600">
                      Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero
                    </p>
                  </div>
                </div>

                {/* Box 2 */}
                <div className=" w-full md:w-[45%]">
                  <div className="bg-orange-400 w-[100px] h-32 relative flex justify-center items-center">
                    <div className="border border-white absolute h-24 w-20 top-4 left-2 flex justify-center items-center">
                      <i className="fas fa-medal text-white text-3xl"></i>
                    </div>
                  </div>
                  <div className="max-w-sm">
                    <h1 className="text-lg font-bold">Award Winning</h1>
                    <p className="text-sm text-gray-600">
                      Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* count section */}
        <div className="bg-[#1c1919d1] py-8 px-4 flex flex-wrap justify-evenly gap-8">
          {/* Star Icon */}
          <div className="flex gap-4 items-center w-full sm:w-[45%] md:w-[22%]">
            <div className="bg-orange-400 w-20 h-20 relative flex justify-center items-center">
              <div className="border border-white absolute h-16 w-16 top-2 left-2 flex justify-center items-center">
                <i className="fas fa-star text-white text-3xl"></i>
              </div>
            </div>
            <div>
              <h4 className="text-amber-500">Our experience</h4>
              <h1 className="text-amber-50 text-[32px] sm:text-[40px] font-extrabold">
                <CountUp end={12345} duration={3} />
              </h1>
            </div>
          </div>

          {/* Users Icon */}
          <div className="flex gap-4 items-center w-full sm:w-[45%] md:w-[22%]">
            <div className="bg-orange-400 w-20 h-20 relative flex justify-center items-center">
              <div className="border border-white absolute h-16 w-16 top-2 left-2 flex justify-center items-center">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
            </div>
            <div>
              <h4 className="text-amber-500">Cake Specialist</h4>
              <h1 className="text-amber-50 text-[32px] sm:text-[40px] font-extrabold">
                <CountUp end={5678} duration={3} />
              </h1>
            </div>
          </div>

          {/* Tick Icon */}
          <div className="flex gap-4 items-center w-full sm:w-[45%] md:w-[22%]">
            <div className="bg-orange-400 w-20 h-20 relative flex justify-center items-center">
              <div className="border border-white absolute h-16 w-16 top-2 left-2 flex justify-center items-center">
                <i className="fas fa-check text-white text-3xl"></i>
              </div>
            </div>
            <div>
              <h4 className="text-amber-500">Complete Project</h4>
              <h1 className="text-amber-50 text-[32px] sm:text-[40px] font-extrabold">
                <CountUp end={3210} duration={3} />
              </h1>
            </div>
          </div>

          {/* Coffee Icon */}
          <div className="flex gap-4 items-center w-full sm:w-[45%] md:w-[22%]">
            <div className="bg-orange-400 w-20 h-20 relative flex justify-center items-center">
              <div className="border border-white absolute h-16 w-16 top-2 left-2 flex justify-center items-center">
                <i className="fas fa-mug-hot text-white text-3xl"></i>
              </div>
            </div>
            <div>
              <h4 className="text-amber-500">Happy Clients</h4>
              <h1 className="text-amber-50 text-[32px] sm:text-[40px] font-extrabold">
                <CountUp end={7890} duration={3} />
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img className="h-[90px]" src="./cake-log1.png" alt="CakeZone Logo" />
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
              <li><a href="#" className="hover:text-orange-400">Home</a></li>
              <li><a href="#" className="hover:text-orange-400">About</a></li>
              <li><a href="#" className="hover:text-orange-400">Menu</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <p className="mb-4 text-sm">Subscribe to get the latest updates & offers.</p>
            <Link to="/subscribe"><button className="bg-orange-500 hover:bg-transparent text-white border-2 border-amber-700 mt-3 transition py-2 px-4 w-full">
              Subscribe
            </button></Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center text-sm flex-wrap gap-4">
          <p className="text-center sm:text-left w-full sm:w-auto">© 2025 CakeZone. All rights reserved.</p>
          <button onClick={scrollToTop} className="bg-amber-500 p-3 rounded-full transition" title="Back to top">
            <FaArrowUp className="text-white text-lg" />
          </button>
        </div>
      </footer>

    </div>
  );
}

export default Us;
