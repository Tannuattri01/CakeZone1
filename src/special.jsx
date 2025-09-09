import React from "react";
import {  Link} from 'react-router-dom';
function Special() {
  return (
    <div className="relative mt-20">
      <img className="w-full h-[380px] object-cover" src="./images/offer.jpg" alt="Special Offer" />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center opacity-100 p-4">
        <h1 className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold text-orange-400 font-[Great_Vibes]">
          Special Kombo Pack
        </h1>
        <h1
          className="text-center text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold text-white"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Super Crispy Cakes
        </h1>
        <p className="text-xl text-white text-center w-[90%] sm:w-[80%] lg:w-[50%] mx-auto mt-4">
          Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.
        </p>
        <div className="flex gap-10 mt-6 justify-center">
        <Link to="/shop" ><button className="h-[45px] w-[130px] md:h-[50px] md:w-[140px] text-[16px] md:text-[19px] bg-orange-500 hover:bg-transparent text-white border-2 border-amber-700 transition">
            Shop Now
          </button></Link>
          <Link to="/read"><button className="bg-transparent border-2 border-white text-white py-2 px-6  hover:bg-white hover:text-black transition duration-300">
            Read More
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default Special;
