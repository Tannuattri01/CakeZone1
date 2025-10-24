import React from "react";

function Team() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold text-orange-400 font-[Great_Vibes]">
        Team Members
      </h1>
      <h2
        className="text-center text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Our Master Chefs
      </h2>

      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {/* Chef 1 */}
        <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
          <img
            className="h-[380px] w-full object-cover"
            src="./images/chef1.jpg"
            alt="Chef 1"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-black bg-opacity-70 border border-white p-4 text-center text-white">
            <h3 className="text-xl sm:text-2xl font-bold">Chef 1</h3>
            <p>Head Chef</p>
          </div>
        </div>

        {/* Chef 2 */}
        <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
          <img
            className="h-[380px] w-full object-cover"
            src="./images/chef2.jpg"
            alt="Chef 2"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-black bg-opacity-70 border border-white p-4 text-center text-white">
            <h3 className="text-xl sm:text-2xl font-bold">Chef 2</h3>
            <p>Pastry Chef</p>
          </div>
        </div>

        {/* Chef 3 */}
        <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
          <img
            className="h-[380px] w-full object-cover"
            src="./images/chef3.jpg"
            alt="Chef 3"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-black bg-opacity-70 border border-white p-4 text-center text-white">
            <h3 className="text-xl sm:text-2xl font-bold">Chef 3</h3>
            <p>Decorator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
