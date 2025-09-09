import React, { useState } from 'react';

function OrderNow() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cakeType, setCakeType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order details: \nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCake Type: ${cakeType}\nQuantity: ${quantity}\nMessage: ${message}`);
  };

  return (
    <div className="bg-[#f9f9f9] p-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Order Your Cake</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="text-lg font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="text-lg font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="phone" className="text-lg font-semibold">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cakeType" className="text-lg font-semibold">Cake Type</label>
              <select
                id="cakeType"
                value={cakeType}
                onChange={(e) => setCakeType(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              >
                <option value="">Select Cake Type</option>
                <option value="Birthday Cake">Birthday Cake</option>
                <option value="Wedding Cake">Wedding Cake</option>
                <option value="Custom Cake">Custom Cake</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="quantity" className="text-lg font-semibold">Quantity</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="text-lg font-semibold">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Additional requests or details"
              rows="4"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderNow;
