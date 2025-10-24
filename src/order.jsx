import React, { useState } from "react";

function OrderNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    quantity: 1,
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, cakeType, quantity, message } = formData;

    alert(
      `🍰 Order Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Cake Type: ${cakeType}
Quantity: ${quantity}
Message: ${message || "—"}`
    );
  };

  return (
    <div className="bg-[#f9f9f9] p-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Order Your Cake
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="text-lg font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="text-lg font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
          </div>

          {/* Phone & Cake Type */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="phone" className="text-lg font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="cakeType" className="text-lg font-semibold">
                Cake Type
              </label>
              <select
                id="cakeType"
                value={formData.cakeType}
                onChange={handleChange}
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

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="text-lg font-semibold">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional requests or details"
              rows="4"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
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
