import React, { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // Clear the input field after submission
  };

  return (
    <div className="bg-[#f9f9f9] py-20">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-center mb-6">
          Stay updated with our latest news and offers! Enter your email below to
          subscribe to our newsletter.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="email"
              className="text-lg font-semibold text-gray-700"
            >
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
