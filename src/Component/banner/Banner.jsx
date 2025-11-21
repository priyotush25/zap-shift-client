import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";
import Button from "../../shared/button/Button";
import Circle from "../../shared/button/Circle";

const Banner = () => {
  return (
    <div className="p-2 lg:p-10 overflow-hidden bg-white rounded-2xl lg:rounded-4xl relative mt-6">
      <div className="absolute z-50 ml-20 mt-[400px]">
        <Button className={"bg-primary"}>Track Your Parcel</Button>
        <Circle />
        <Button className={"bg-white ml-4"}>Be A Rider</Button>
      </div>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showThumbs={false}
        emulateTouch={true}
      >
        <div>
          <img src={bannerImg1} alt="" />
        </div>
        <div>
          <img src={bannerImg2} alt="" />
        </div>
        <div>
          <img src={bannerImg3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
