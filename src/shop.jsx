import React from "react";
import {  Link} from 'react-router-dom';
const ShopNow = () => {
  return (
    <div className="bg-[#fef3e7] min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
        🎉 Start of Production
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        We are thrilled to announce that production has officially started! Your delicious cakes are now baking fresh in our kitchen. Thank you for choosing CakeZone!
      </p>

      <img
        src="/images/production.png"
        alt="Cake baking"
        className="w-[300px] md:w-[400px] mb-8 shadow-xl rounded-lg"
      />

      <Link to="/track"><button className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-transparent hover:text-orange-500 border-2 border-orange-500 transition">
        Track My Order
      </button></Link>

      <p className="text-sm text-gray-600 mt-10">Need help? <a href="/contact" className="text-orange-500 underline hover:text-orange-600">Contact us</a></p>
    </div>
  );
};

export default ShopNow;
