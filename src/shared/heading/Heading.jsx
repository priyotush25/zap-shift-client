const Heading = ({ title, description, className }) => {
  return (
    <div className={`${className}`}>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="lg:w-4/6">{description}</p>
    </div>
  );
};

export default Heading;
