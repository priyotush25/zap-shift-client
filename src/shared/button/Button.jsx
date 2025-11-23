const Button = ({ children, className, type }) => {
  return (
    <button type={type} className={`${className} btn btn-lg rounded-xl text-black`}>
      {children}
    </button>
  );
};

export default Button;
