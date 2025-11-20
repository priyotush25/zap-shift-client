const Card = ({ img, title, description, className, children }) => {
  return (
    <div className={`${className} p-8 rounded-3xl shadow-sm`}>
      <img src={img} alt="" />
      <h1 className="text-xl font-bold text-secondary mb-4 mt-6">{title}</h1>
      <p>{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
