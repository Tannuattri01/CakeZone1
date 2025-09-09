import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import {  Link} from 'react-router-dom';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black text-white px-6 py-12 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* 1. Logo */}
                <div>
                    <img className="h-[90px]" src="./cake-log1.png" alt="CakeZone Logo" />
                    <p className="mt-4 text-sm">
                        Taste the best cakes in town with love and passion. Baked fresh daily!
                    </p>
                </div>

                {/* 2. Contact & Social */}
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

                {/* 3. Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-orange-400">Home</a></li>
                        <li><a href="#" className="hover:text-orange-400">About</a></li>
                        <li><a href="#" className="hover:text-orange-400">Menu</a></li>
                        <li><a href="#" className="hover:text-orange-400">Contact</a></li>
                    </ul>
                </div>

                {/* 4. Newsletter */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
                    <p className="mb-4 text-sm">Subscribe to get the latest updates & offers.</p>
                    
                    <Link to="subscribe"><button className="bg-orange-500 hover:bg-transparent text-white border-2 border-amber-700 mt-3 transition py-2 px-4 w-full">
                        Subscribe
                    </button></Link>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center text-sm flex-wrap gap-4">
                <p className="text-center sm:text-left w-full sm:w-auto">© 2025 CakeZone. All rights reserved.</p>
                <button
                    onClick={scrollToTop}
                    className="bg-amber-500  p-3 rounded-full transition"
                    title="Back to top"
                >
                    <FaArrowUp className="text-white text-lg" />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
