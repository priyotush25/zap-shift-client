import Banner from "../../Component/banner/Banner";
import Brands from "../../Component/brands/Brands";
import Service from "../../Component/service/Service";
import Work from "../../Component/work/Work";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Work />
        <Service />
        <Brands />
      </div>
    </>
  );
};

export default Home;
