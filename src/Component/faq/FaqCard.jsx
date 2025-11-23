import { use } from "react";

const FaqCard = ({ faqData }) => {
  const dataFaq = use(faqData);
  const faqAllData = dataFaq.faq;


  return (
    <div>
      {faqAllData.map((data, idx) => (
        <div
          key={idx}
          className="collapse collapse-arrow bg-base-100 border border-base-300 p-4 mb-4"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">{data.question}</div>
          <div className="collapse-content text-sm">{data.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FaqCard;
