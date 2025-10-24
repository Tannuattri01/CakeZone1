import React from "react";
import "./client.css";

function Clients() {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-center text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold text-orange-400 font-[Great_Vibes]">
          Testimonial
        </h1>
        <h1
          className="text-center text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Our Clients Say!!!
        </h1>
      </div>

      <div className="overflow-hidden w-[70%] mx-auto mt-10">
        <div id="slider" className="flex w-max animate-scroll space-x-4 h-[220px]">
          {/* Card 1 */}
          <div className="flex-shrink-0 border border-white p-4 bg-black text-white w-[300px] relative">
            <div className="border border-white py-4 px-4 absolute w-[270px] top-2">
              <div className="flex gap-7">
                <img src="/images/test-1.jpg" className="object-cover rounded" alt="Client 1" />
                <h2 className="mt-4 text-lg font-bold text-center">Client Name</h2>
              </div>
              <p className="text-sm text-center mt-2">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 border border-white p-4 bg-black text-white w-[300px]">
            <div className="border border-white py-4 px-4 absolute w-[270px] top-2">
              <div className="flex gap-7">
                <img src="/images/test-2.jpg" className="object-cover rounded" alt="Client 2" />
                <h2 className="mt-4 text-lg font-bold text-center">Client Name</h2>
              </div>
              <p className="text-sm text-center mt-2">
                “Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.”
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 border border-white p-4 bg-black text-white w-[300px]">
            <div className="border border-white py-4 px-4 absolute w-[270px] top-2">
              <div className="flex gap-7">
                <img src="/images/test-3.jpg" className="object-cover rounded" alt="Client 3" />
                <h2 className="mt-4 text-lg font-bold text-center">Client Name</h2>
              </div>
              <p className="text-sm text-center mt-2">
                “Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.”
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 border border-white p-4 bg-black text-white w-[300px]">
            <div className="border border-white py-4 px-4 absolute w-[270px] top-2">
              <div className="flex gap-7">
                <img src="/images/test-4.jpg" className="object-cover rounded" alt="Client 4" />
                <h2 className="mt-4 text-lg font-bold text-center">Client Name</h2>
              </div>
              <p className="text-sm text-center mt-2">
                “Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
