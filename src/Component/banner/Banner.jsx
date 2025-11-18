import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../assets/banner/banner1.png";
import slider2 from "../../assets/banner/banner2.png";
import slider3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10 p-10 bg-white rounded-xl">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <img src={slider1} alt="slide1" className="w-full  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slide2" className="w-full  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slide3" className="w-full  object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
