import React from "react";

function Menu() {
  return (
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
          { image: "./images/cake-1.jpg", title: "Birthday Cake" },
          { image: "./images/cake-2.jpg", title: "Wedding Cake" },
          { image: "./images/cake-3.jpg", title: "Custom Cake" },
          { image: "./images/cake-1.jpg", title: "Birthday Cake" },
          { image: "./images/cake-2.jpg", title: "Wedding Cake" },
          { image: "./images/cake-3.jpg", title: "Custom Cake" },
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
  );
}

export default Menu;
