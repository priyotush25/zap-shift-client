import axios from "axios";

import { useEffect, useState } from "react";
import Card from "../../shared/card.jsx/Card";

import tracking from "../../assets/live-tracking.png";
import {
  default as delivery,
  default as delivery2,
} from "../../assets/safe-delivery.png";

const Feature = () => {
  const [featureData, setFeatureData] = useState([]);

  useEffect(() => {
    axios.get("/featuresData.json").then((res) => setFeatureData(res.data));
  }, []);

  const serviceImg = [tracking, delivery, delivery2];

  return (
    <div className="space-y-6 mt-24">
      {featureData.map((item) => (
        <Card key={item.id} className={"bg-white"}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
            <div>
              <img src={serviceImg[item.id - 1]} alt="" />
            </div>
            <div className="lg:border-l-2 border-dashed border-gray-400 lg:h-30"></div>

            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold text-secondary">
                {item.title}
              </h1>
              <p>{item.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Feature;
