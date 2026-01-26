import React from "react";

const Customer = () => {
  return (
    <div className="bg-[#053D40] text-white rounded-xl p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-7">
      {/* Text Content */}
      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h2>
        <p className="text-gray-300 mb-6">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded hover:bg-lime-500 transition">
            Become a Merchant
          </button>
          <button className="border border-lime-400 text-lime-400 font-semibold px-6 py-2 rounded hover:bg-lime-400 hover:text-black transition">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

      {/* Illustration (simple boxes with location pin) */}
      <div className="relative w-40 h-40 md:w-60 md:h-60">
        <div className="absolute top-0 left-8 w-32 h-16 border-2 border-lime-300 rounded-lg"></div>
        <div className="absolute top-16 left-0 w-32 h-16 border-2 border-lime-300 rounded-lg"></div>
        <div className="absolute top-12 left-16 w-32 h-16 border-2 border-lime-300 rounded-lg">
          <div className="absolute -top-4 right-2 text-lime-400 text-2xl">
            📍
          </div>
        </div>
      </div>

      {/* Optional decorative lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <path
          d="M0,40 C100,150 300,50 500,150"
          stroke="#4f46e5"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Customer;
