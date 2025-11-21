import Banner from "../../Component/banner/Banner";
import Brands from "../../Component/brands/Brands";
import Feature from "../../Component/features/Feature";
import Service from "../../Component/service/Service";
import Work from "../../Component/work/Work";
import Container from "../../shared/container/Container";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Container>
          <Work />
          <Service />
          <Brands />
          <Feature />
        </Container>
      </div>
    </>
  );
};

export default Home;
