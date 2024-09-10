/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Divider, Empty } from "antd";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDonorByIdMutation } from "../../redux/api/donorApi/donorApi";
import { toast } from "sonner";
import Loading from "../../components/Loading/Loading";

const UpdateMapView = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 13);
  }, [coords, map]);
  return null;
};

const DonorDetails = () => {
  const { id } = useParams();
  const [Data, SetData] = useState<any>(null);
  const [mutation, mutationOpt] = useGetDonorByIdMutation();
  const navigate = useNavigate();

  const GetData = async () => {
    try {
      if (mutationOpt.isLoading) {
        return;
      }
      const data = await mutation({ id });
      if ("error" in data) {
        return toast.error("something went wrong");
      }
      SetData(data.data);
    } catch (error) {
      console.log("🚀 ~ GetData ~ error:", error);
    }
  };
  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (mutationOpt.isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full container P-3 mx-auto">
      {Data ? (
        <Card
          title={
            <h1 className="text-center font-bold text-xl">Donar Details</h1>
          }
          extra={
            <Button
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>
          }
        >
          <Divider className="bg-red-500" />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 mb-5">
            <div>
              <p className="">
                <span className="font-bold">Name :</span> {Data.name}
              </p>
              <p className="">
                <span className="font-bold">Phone :</span> {Data.phone}
              </p>
              <p className="">
                <span className="font-bold">Address :</span> {Data.address}
              </p>
              <p className="">
                <span className="font-bold">Division :</span> {Data.division}
              </p>
            </div>
            <div>
              <a href={"tel:" + Data.phone}>
                <Button type="primary" block>
                  Call
                </Button>
              </a>
            </div>
          </div>
          {Data.latitude && Data.longitude && (
            <Card size="small" title="Location">
              <MapContainer
                className="border"
                center={[23.799896, 90.352728]}
                zoom={19}
                scrollWheelZoom={false}
                style={{
                  width: "100%",
                  height: "300px",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.799896, 90.352728]}>
                  <Popup>Your location</Popup>
                </Marker>
                <UpdateMapView coords={[23.799896, 90.352728]} />
              </MapContainer>
            </Card>
          )}
        </Card>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default DonorDetails;
