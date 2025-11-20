import bookIcon from "../../assets/bookingIcon.png";

const WorkCard = ({ item }) => {
  const { title, description } = item;

  return (
    <div className="p-4 lg:p-8 rounded-3xl shadow-sm bg-white">
      <img src={bookIcon} alt="" className="w-14" />
      <h1 className="text-xl font-bold text-secondary mb-4 mt-6">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default WorkCard;
