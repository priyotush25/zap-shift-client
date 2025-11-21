import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
import Card from "../../shared/card.jsx/Card";

const Coverage = () => {
  const serviceCenter = useLoaderData();

  const position = [23.685, 90.3563];

  const mapRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload

    const location = e.target.location.value.trim();
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (location) {
      const coord = [district.latitude, district.longitude];
      console.log(coord);

      mapRef.current.flyTo(coord, 12);
    }

    console.log("Searching:", location);
  };

  return (
    <Card className={"bg-white"}>
      <h1 className="text-5xl font-black text-secondary mb-12">
        We are available in 64 districts
      </h1>

      <form
        onSubmit={handleSearch}
        className="w-[350px]  rounded-xl flex items-center bg-gray-100"
      >
        <input
          type="text"
          name="location"
          className="flex-1 px-4 py-2 outline-none"
          placeholder="Search district..."
        />
        <button
          type="submit"
          className=" rounded-2xl px-6 py-2 bg-primary text-secondary"
        >
          Search
        </button>
      </form>

      <h1 className="text-secondary font-bold mb-12 mt-20">
        We deliver almost all over Bangladesh
      </h1>
      <div className="border h-[420px] w-full">
        <MapContainer
          className="w-full h-full"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenter.map((center, idx) => (
            <Marker key={idx} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br />{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Card>
  );
};

export default Coverage;
