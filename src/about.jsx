import React from "react";
import CountUp from "react-countup";

function About() {
  return (
    <div>
      <div className="px-4 md:px-12 bg-white">
        <h1 className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold text-orange-400 font-[Great_Vibes]">
          about us
        </h1>

        <h1
          className="text-center text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Welcome to Cakezone
        </h1>

        <div className="flex flex-col md:flex-row justify-evenly items-start gap-10 mt-12 ml-4 md:ml-12">
          {/* ✅ Correct Image Path */}
          <div className="w-full md:w-[40%] max-h-[500px] overflow-hidden">
            <img
              src="/images/cake.jpg"
              alt="Cake"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 w-full md:max-w-2xl">
            <h2 className="text-base sm:text-lg md:text-xl w-full font-semibold">
              Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo
            </h2>

            <p className="text-sm sm:text-base text-gray-700 w-full">
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna
              <br />
              <br />
            </p>

            {/* Icons Section */}
            <div className="flex flex-col md:flex-row gap-8 mt-8 w-full flex-wrap">
              {/* Box 1 */}
              <div className="w-full md:w-[45%]">
                <div className="bg-orange-400 w-[100px] h-32 relative flex justify-center items-center">
                  <div className="border border-white absolute h-24 w-20 top-4 left-2 flex justify-center items-center">
                    <i className="fas fa-heart-crack text-white text-3xl"></i>
                  </div>
                </div>
                <div className="max-w-sm">
                  <h1 className="text-lg font-bold">100% Healthy</h1>
                  <p className="text-sm text-gray-600">
                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-full md:w-[45%]">
                <div className="bg-orange-400 w-[100px] h-32 relative flex justify-center items-center">
                  <div className="border border-white absolute h-24 w-20 top-4 left-2 flex justify-center items-center">
                    <i className="fas fa-medal text-white text-3xl"></i>
                  </div>
                </div>
                <div className="max-w-sm">
                  <h1 className="text-lg font-bold">Award Winning</h1>
                  <p className="text-sm text-gray-600">
                    Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* count section */}
      <div className="bg-[#1c1919d1] py-8 px-4 flex flex-wrap justify-evenly gap-8">
        {/* Star Icon */}
        <div className="flex gap-4 items-center w-full sm:w-[45%] md:w-[22%]">
          <div className="bg-orange-400 w-20 h-20 relative flex justify-center items-center">
            <div className="border border-white absolute h-16 w-16 top-2 left-2 flex justify-center items-center">
              <i className="fas fa-star text-white text-3xl"></i>
            </div>
          </div>
          <div>
            <h4 className="text-amber-500">Our experience</h4>
            <h1 className="text-amber-50 text-[32px] sm:text-[40px] font-extrabold">
              <CountUp end={12345} duration={3} />
            </h1>
          </div>
        </div>

        {/* Users Icon */}
        <div className="flex gap-4 items-center w-full sm:w-[45%] md:w-[22%]">
          <div className="bg-orange-400 w-20 h-20 relative flex justify-center items-center">
            <div className="border border-white absolute h-16 w-16 top-2 left-2 flex justify-center items-center">
              <i className="fas fa-users text-white text-3xl"></i>
            </div>
          </div>
          <div>
            <h4 className="text-amber-500">Cake Specialist</h4>
            <h1 className="text-amber-50 text-[32px] sm:text-[40px] font-extrabold">
              <CountUp end={5678} duration={3} />
            </h1>
          </div>
        </div>

        {/* Tick Icon */}
        <div className="flex gap-4 items-center w-full sm:w-[45%] md:w-[22%]">
          <div className="bg-orange-400 w-20 h-20 relative flex justify-center items-center">
            <div className="border border-white absolute h-16 w-16 top-2 left-2 flex justify-center items-center">
              <i className="fas fa-check text-white text-3xl"></i>
            </div>
          </div>
          <div>
            <h4 className="text-amber-500">Complete Project</h4>
            <h1 className="text-amber-50 text-[32px] sm:text-[40px] font-extrabold">
              <CountUp end={3210} duration={3} />
            </h1>
          </div>
        </div>

        {/* Coffee Icon */}
        <div className="flex gap-4 items-center w-full sm:w-[45%] md:w-[22%]">
          <div className="bg-orange-400 w-20 h-20 relative flex justify-center items-center">
            <div className="border border-white absolute h-16 w-16 top-2 left-2 flex justify-center items-center">
              <i className="fas fa-mug-hot text-white text-3xl"></i>
            </div>
          </div>
          <div>
            <h4 className="text-amber-500">Happy Clients</h4>
            <h1 className="text-amber-50 text-[32px] sm:text-[40px] font-extrabold">
              <CountUp end={7890} duration={3} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
