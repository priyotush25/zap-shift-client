import Banner from "../../Component/banner/Banner";
import Brands from "../../Component/brands/Brands";
import Faq from "../../Component/faq/Faq";
import Feature from "../../Component/features/Feature";
import Merchant from "../../Component/marchent/Merchant";
import Service from "../../Component/service/Service";
import Testimonial from "../../Component/testomonial/Testimonial";
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
          <Merchant />
          <Testimonial />
          <Faq />
        </Container>
      </div>
    </>
  );
};

export default Home;
