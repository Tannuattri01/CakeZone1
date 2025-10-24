import React from "react";
import { Link } from "react-router-dom";

function ReadMore() {
  return (
    <div className="bg-[#fff8f0] text-black min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
          More About Our Cakes
        </h1>

        {/* Image */}
        <img
          src="/images/delicious.png"
          alt="Delicious Cake"
          className="w-full max-h-[600px] object-cover rounded-xl shadow-md mb-8"
        />

        {/* Text */}
        <p className="text-lg leading-relaxed mb-6">
          At <strong>CakeZone</strong>, we believe in making every celebration extra special with our
          handcrafted cakes. Whether it's a birthday, wedding, anniversary, or any special event,
          our cakes are made with premium ingredients and a lot of love.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Our team of passionate bakers and decorators can turn your dream cake into a delicious
          reality. From classic chocolate and red velvet to custom designs and flavors, we have
          something for everyone.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Don't miss out on our special offers and seasonal flavors. Visit our store or order online
          to make your day sweeter!
        </p>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="bg-orange-500 text-white py-3 px-8 rounded-lg border-2 border-orange-600 hover:bg-transparent hover:text-orange-600 transition duration-300 inline-block"
          >
            Contact Us ➜
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReadMore;
s