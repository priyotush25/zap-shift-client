import bookIcon from "../../assets/bookingIcon.png";
import Card from "../../shared/card.jsx/Card";

const WorkCard = ({ item }) => {
  const { title, description } = item;

  return (
    <div>
      <Card
        className={"bg-white"}
        title={title}
        description={description}
        img={bookIcon}
      />
    </div>
  );
};

export default WorkCard;
