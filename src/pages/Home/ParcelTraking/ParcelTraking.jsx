import React from "react";
import liveTraking from "../../../assets/banner/live-tracking.png";
import safeDelevery from "../../../assets/banner/safe-delivery.png";
import callCenter from "../../../assets/banner/safe-delivery.png";

const features = [
  {
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: liveTraking,
  },
  {
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: safeDelevery,
  },
  {
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: callCenter,
  },
];

const ParcelTraking = () => {
  return (
    <section className="my-10 px-4 md:px-10 ">
      <div className="max-w-6xl mx-auto space-y-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-28 md:w-36 flex-shrink-0"
            />

            {/* Divider (desktop only) */}
            <div className="hidden md:block h-20 border-l border-dashed border-gray-300"></div>

            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParcelTraking;
