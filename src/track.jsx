import React from 'react';

const TrackMyOrder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-xl w-full">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Track My Order</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Order ID"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
          >
            Track Order
          </button>
        </form>

        {/* Sample Result */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Order Status:</h3>
          <p className="text-green-600 font-medium mt-2">🎂 Your cake is being prepared with love!</p>
        </div>
      </div>
    </div>
  );
};

export default TrackMyOrder;
