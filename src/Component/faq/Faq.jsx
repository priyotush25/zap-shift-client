import Button from "../../shared/button/Button";
import Circle from "../../shared/button/Circle";
import Card from "../../shared/card.jsx/Card";
import Heading from "../../shared/heading/Heading";
import FaqCard from "./FaqCard";

const faqData = fetch("/faqData.json").then((res) => res.json());

const Faq = () => {
  return (
    <Card className={"my-24 bg-transparent border-transparent"}>
      <Heading
        className={"flex flex-col items-center justify-center mb-10"}
        titleClass="text-center"
        title={"Frequently Asked Question (FAQ)"}
        descriptionClass="text-center"
        description={
          "Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!"
        }
      ></Heading>

      <div className="space-y-4">
        <FaqCard faqData={faqData} />
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button className={"bg-primary"}>See More FAQ’s</Button>
        <Circle />
      </div>
    </Card>
  );
};

export default Faq;
