import React from "react";
import {  Link} from 'react-router-dom';

function Discount() {
  return (
    <div>
      <div className="relative bg-[#0a0a0acc] min-h-[500px] mt-50 px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-evenly gap-10 md:gap-4 items-center">
          {/* Card 1 */}
          <div className="relative h-[300px] w-full md:w-[400px]">
            <div className="absolute bottom-[100px] bg-amber-500 h-full w-full ">
              <div className="border border-white  absolute h-[270px] w-[90%] top-4 left-4.5 p-2 flex flex-col justify-center items-center text-center">
                <h1
                  className="text-2xl text-black font-extrabold"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  Birthday Cake
                </h1>
                <p className="text-xl text-white">
                  Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                  dolor magna dolor vero
                </p>
                <br />
                <Link to="read"><button>Read more ➡️</button></Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-[300px] w-full md:w-[400px]">
            <div className="absolute bottom-[100px] bg-amber-500 h-full w-full">
              <div className="border border-white  absolute h-[270px] w-[90%] top-4 left-4.5 p-2 flex flex-col justify-center items-center text-center">
                <h1
                  className="text-2xl text-black font-extrabold"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  Wedding Cake
                </h1>
                <p className="text-xl text-white">
                  Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                  dolor magna dolor vero
                </p>
                <br />
                <Link to="read"><button>Read more ➡️</button></Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative h-[300px] w-full md:w-[400px]">
            <div className="absolute bottom-[100px] bg-amber-500 h-full w-full ">
              <div className="border border-white  absolute h-[270px] w-[90%] top-4 left-4.5 p-2 flex flex-col justify-center items-center text-center">
                <h1
                  className="text-2xl text-black font-extrabold"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  Custom Cake
                </h1>
                <p className="text-xl text-white">
                  Labore justo vero ipsum sit clita erat lorem magna clita nonumy
                  dolor magna dolor vero
                </p>
                <br />
                <Link to="read"><button>Read more ➡️</button></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Discount Text & Button */}
        <div className="text-center ">
          <h1
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            30% Discount For This Summer
          </h1>
          <Link to="/order"><button className="h-[45px] w-[130px] md:h-[50px] md:w-[140px] text-[16px] md:text-[19px] text-white bg-orange-500 items-center hover:bg-transparent border-2 border-amber-700 transition">
            Order Now
          </button> </Link>
        </div>
      </div>
    </div>
  );
}

export default Discount;
