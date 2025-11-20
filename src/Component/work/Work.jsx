import axios from "axios";
import { useEffect, useState } from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/servicesData.json");
        setService(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-24">
      <h1 className="text-3xl font-bold text-secondary">How it Works</h1>

      <div className="flex flex-col lg:flex-row gap-4 py-6">
        {service.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Work;
