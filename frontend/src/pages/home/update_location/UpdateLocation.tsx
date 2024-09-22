import { FC, useEffect } from "react";
import { useUpdateUserLocationMutation } from "../../../redux/api/donorApi/donorApi";

const UpdateLocation: FC<{ latitude: number; longitude: number }> = ({
  latitude,
  longitude,
}) => {
  console.log("🚀 ~ latitude:", latitude);
  const [update, updateOpt] = useUpdateUserLocationMutation();

  const Submit = async () => {
    try {
      if (updateOpt.isLoading) {
        return;
      }
      const Res = await update({
        latitude: latitude,
        longitude: longitude,
      });

      console.log("🚀 ~ Submit ~ Res:", Res);
    } catch (error) {
      console.log("🚀 ~ Submit ~ error:", error);
    }
  };
  useEffect(() => {
    Submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default UpdateLocation;
