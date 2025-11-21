const Heading = ({
  title,
  description,
  className,
  titleClass,
  descriptionClass,
}) => {
  return (
    <div className={`${className}`}>
      <h1 className={`${titleClass} text-3xl font-bold mb-4`}>{title}</h1>
      <p className={`${descriptionClass} lg:w-4/6`}>{description}</p>
    </div>
  );
};

export default Heading;
