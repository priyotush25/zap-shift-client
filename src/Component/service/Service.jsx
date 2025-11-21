import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../shared/card.jsx/Card";
import Heading from "../../shared/heading/Heading";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [deliveryData, setDeliveryData] = useState([]);
  useEffect(() => {
    axios
      .get("/public/DeliveryServices.json")
      .then((res) => setDeliveryData(res.data));
  }, []);

  return (
    <div className="mt-24">
      <Card className={"bg-secondary text-center text-white"}>
        <Heading
          className={"flex items-center justify-center flex-col"}
          title={"Our Services"}
          description={
            "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
          }
        ></Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 mt-8">
          {deliveryData.map((items, idx) => (
            <ServiceCard key={idx} deliveryData={items} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Service;
