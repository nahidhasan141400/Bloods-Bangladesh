import React, { useState, useEffect } from "react";
import Map from "./Map"; // Assuming you have a Map component
import { Button } from "antd";

export interface Location {
  lat: number | null;
  lon: number | null;
}

const NearBy: React.FC = () => {
  const [location, setLocation] = useState<Location>({ lat: null, lon: null });
  const [error, setError] = useState<string | null>(null);
  const [permission, setPermission] = useState<PermissionState | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      // Check the geolocation permission status
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        console.log("Permission state:", result);
        setPermission(result.state);

        if (result.state === "granted") {
          getLocation(); // Fetch location if permission already granted
        } else if (result.state === "prompt") {
          requestPermission(); // Ask for permission if not yet decided
        }
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Function to request location and update state
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setError(null);
      },
      (err: GeolocationPositionError) => {
        console.error("Error getting location:", err);
        setError("Unable to retrieve your location.");
      }
    );
  };

  // Request permission explicitly if the user has not granted it yet
  const requestPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setPermission("granted");
        setError(null);
      },
      (err: GeolocationPositionError) => {
        console.error("Error requesting location:", err);
        setError("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div>
      {permission === "granted" && location.lat && location.lon ? (
        // Show the map when permission is granted and location is available
        <Map Location={location} />
      ) : permission === "denied" ? (
        // If permission is denied, ask the user to enable location access
        <div>
          <p>
            Location access denied. Please enable location access in your
            browser settings.
          </p>
        </div>
      ) : (
        // When permission is not granted yet, show a button to request permission
        <div className="w-full p-5 flex justify-center flex-col items-center">
          {error && <p>{error}</p>}
          <Button type="primary" onClick={requestPermission}>
            Enable Location
          </Button>
        </div>
      )}
    </div>
  );
};

export default NearBy;
