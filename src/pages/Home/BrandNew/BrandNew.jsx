import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand2 from "../../../assets/brands/amazon.png";
import brand3 from "../../../assets/brands/amazon_vector.png";
import brand4 from "../../../assets/brands/casio.png";
import brand5 from "../../../assets/brands/moonstar.png";
import brand6 from "../../../assets/brands/randstad.png";
import brand7 from "../../../assets/brands/star.png";
import brand8 from "../../../assets/brands/start_people.png";

const BrandNew = () => {
  const brands = [brand2, brand3, brand4, brand5, brand6, brand7, brand8];

  return (
    <div className="my-7">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        We've helped thousands of{" "}
        <span className="text-emerald-600">sales teams</span>
      </h2>

      <Swiper
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        freeModeMomentum={false}
        spaceBetween={60}
        grabCursor={false}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center px-4 py-3">
              <img
                src={brand}
                alt={`brand-${index}`}
                className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandNew;
