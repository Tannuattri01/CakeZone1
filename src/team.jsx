import React from "react";

function Team() {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold text-orange-400 font-[Great_Vibes]">
          Team Members
        </h1>
        <h1
          className="text-center text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Our Master Chefs
        </h1>
        <div className="flex flex-wrap justify-center mt-10 gap-6">
          <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
            <img className="h-[380px] w-full object-cover" src="./images/chef3.jpg" alt="Chef 3" />
            <div className="bg-black h-30 relative">
              <div className="border border-white py-4 px-4 mx-4 absolute top-3 w-[90%] sm:w-[80%] lg:w-[90%] right-1 text-center items-center text-white text-lg sm:text-2xl">
                <h1>Chef  1</h1>
                <h1>Designation</h1>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
            <img className="h-[380px] w-full object-cover" src="./images/chef2.jpg" alt="Chef 2" />
            <div className="bg-black h-30 relative">
              <div className="border border-white py-4 px-4 mx-4 absolute top-3 w-[90%] sm:w-[80%] lg:w-[90%] right-1 text-center items-center text-white text-lg sm:text-2xl">
                <h1>Chef 2</h1>
                <h1>Designation</h1>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%]">
            <img className="h-[380px] w-full object-cover" src="./images/chef1.jpg" alt="Chef 1" />
            <div className="bg-black h-30 relative">
              <div className="border border-white py-4 px-4 mx-4 absolute top-3 w-[90%] sm:w-[80%] lg:w-[90%] right-1 text-center items-center text-white text-lg sm:text-2xl">
                <h1>Chef 3</h1>
                <h1>Designation</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
