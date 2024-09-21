/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import { Location } from "./NearBy";
import { useGetNearByQuery } from "../../../redux/api/donorApi/donorApi";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Button } from "antd";
import { Link } from "react-router-dom";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "/location.png", // provide path to custom marker icon
  iconSize: [70, 70], // size of the icon
  iconAnchor: [0, 70], // point of the icon which will correspond to marker's location
  popupAnchor: [50, -40], // point from which the popup should open relative to the iconAnchor
});

const Map: FC<{ Location: Location }> = ({ Location }) => {
  const { data } = useGetNearByQuery({
    distance: "1",
    latitude: `${Location.lat}`,
    longitude: `${Location.lon}`,
  });

  const [ctrlPressed, setCtrlPressed] = useState(false);

  useEffect(() => {
    // Function to check if the control key is pressed
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey) {
        setCtrlPressed(true);
      }
    };

    const handleKeyUp = (event: any) => {
      if (!event.ctrlKey) {
        setCtrlPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup the event listeners
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  if (!Location.lat && !Location.lon) {
    return <></>;
  }

  return (
    <div className="max-w-6xl p-5 h-[500px] mx-auto relative">
      <h1 className="text-2xl md:text-4xl font-bold text-red-500 text-center pb-3">
        Donor Near You{" "}
      </h1>
      <MapContainer
        center={[Location.lat || 23.798524, Location.lon || 90.353285]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={ctrlPressed}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data &&
          data?.map((point: any, index: any) => (
            <Marker
              key={index}
              position={[point.latitude, point.longitude]}
              icon={customIcon}
            >
              <Popup>
                <h1 className="font-bold">{point?.name}</h1>
                <p className="text-xl font-bold text-red-600 ">
                  {point?.blood_group}
                </p>
                <Link to={"/donor/" + point?.id} target="_blank">
                  <Button type="primary" block>
                    Details
                  </Button>
                </Link>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
