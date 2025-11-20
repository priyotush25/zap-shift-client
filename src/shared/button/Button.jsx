const Button = ({ children, className }) => {
  return (
    <div className={`${className} btn btn-lg rounded-xl text-black`}>
      {children}
    </div>
  );
};

export default Button;
