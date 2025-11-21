import merchant from "../../assets/location-merchant.png";
import Button from "../../shared/button/Button";
import Card from "../../shared/card.jsx/Card";

const Merchant = () => {
  return (
    <Card className={"mt-24 bg-secondary lg:p-20"}>
      <div className="flex lg:flex-row items-center flex-col-reverse gap-5">
        <div className="space-y-4">
          <h1 className="text-5xl font-black text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-white">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="mt-8 flex flex-col  lg:flex-row gap-4">
            <Button
              className={
                "bg-primary border-secondary shadow-none rounded-full hover:bg-transparent hover:text-primary hover:border-primary"
              }
            >
              Become a Merchant
            </Button>
            <Button
              className={
                "border shadow-none border-primary bg-transparent text-primary hover:bg-primary hover:text-secondary"
              }
            >
              Earn with ZapShift Courier
            </Button>
          </div>
        </div>
        <img src={merchant} alt="" />
      </div>
    </Card>
  );
};

export default Merchant;
