import serviceIcon from "../../assets/service.png";
import Card from "../../shared/card.jsx/Card";

const ServiceCard = ({ deliveryData }) => {
  return (
    <>
      <Card
        className={
          "bg-white text-secondary flex flex-col items-center hover:bg-primary"
        }
        img={serviceIcon}
        title={deliveryData.service}
        description={deliveryData.description}
      ></Card>
    </>
  );
};

export default ServiceCard;
