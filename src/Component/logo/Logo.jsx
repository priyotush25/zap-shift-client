import img from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={img} alt="" />
      <h1 className="text-2xl font-black -ms-4">zapShift</h1>
    </div>
  );
};

export default Logo;
