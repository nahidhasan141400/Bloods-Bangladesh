import { FC } from "react";
import { Location } from "./NearBy";
import { useGetNearByQuery } from "../../../redux/api/donorApi/donorApi";

const Map: FC<{ Location: Location }> = ({ Location }) => {
  const { data } = useGetNearByQuery({
    distance: "1",
    latitude: `${Location.lat}`,
    longitude: `${Location.lon}`,
  });
  console.log("🚀 ~ data:", data);
  return <div>Map</div>;
};

export default Map;
