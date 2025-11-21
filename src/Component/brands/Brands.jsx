import Marquee from "react-fast-marquee";
import Heading from "../../shared/heading/Heading";

import amazon from "../../assets/brands/amazon.png";
import amazon2 from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";

const brandsLogo = [
  amazon,
  amazon2,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <div className="mt-24">
      <Heading
        className="text-center"
        title="We've helped thousands of sales teams"
      />
      <div>
        <Marquee pauseOnHover>
          <div className="flex gap-30 mt-10">
            {brandsLogo.map((brand) => (
              <img src={brand}></img>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
