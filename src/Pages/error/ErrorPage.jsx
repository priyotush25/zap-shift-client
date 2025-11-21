import { Link } from "react-router";
import errorImg from "../../assets/error.png";
import Button from "../../shared/button/Button";
import Card from "../../shared/card.jsx/Card";
const ErrorPage = () => {
  return (
    <Card className={"bg-white "}>
      <div className="flex flex-col items-center justify-center">
        <img src={errorImg} alt="" />
        <Button className={"bg-primary mx-auto"}>
          <Link to={"/"}>Go Home</Link>
        </Button>
      </div>
    </Card>
  );
};

export default ErrorPage;
