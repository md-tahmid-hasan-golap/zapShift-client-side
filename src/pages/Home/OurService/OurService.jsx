import React from "react";
import serviceIcon from "../../../assets/banner/service.png";

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours.",
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
  },
  {
    title: "Fulfillment Solution",
    desc: "Customized service with inventory management support, online order processing, packaging, and after-sales support.",
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services including warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility, customers can return or exchange products easily.",
  },
];

const OurService = () => {
  return (
    <section className="bg-[#083C40] py-16 mb-7 rounded-lg px-4 md:px-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-200 text-sm md:text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 text-center transition hover:scale-[1.02]
              ${
                service.highlight
                  ? "bg-lime-300 text-gray-800"
                  : "bg-white text-gray-800"
              }`}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <img src={serviceIcon} alt="service" className="w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
            <p className="text-sm opacity-80">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
