import React, { useState, useEffect } from "react";
import Map from "./Map";

export interface Location {
  lat: number | null;
  lon: number | null;
}

const NearBy: React.FC = () => {
  const [location, setLocation] = useState<Location>({ lat: null, lon: null });
  const [error, setError] = useState<string | null>(null);
  const [permission, setPermission] = useState<PermissionState | null>(null); // PermissionState can be 'granted', 'denied', or 'prompt'

  useEffect(() => {
    // Check if browser supports geolocation
    if (navigator.geolocation) {
      // Check the geolocation permission status
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        setPermission(result.state);
        if (result.state === "granted") {
          // If permission is already granted, fetch location
          getLocation();
        }
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Function to request location
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
        console.log("🚀 ~ getLocation ~ err:", err);
        setError("Unable to retrieve your location");
      }
    );
  };

  // Request permission if the user has not granted it yet
  const requestPermission = () => {
    getLocation();
  };

  return (
    <div>
      {permission === "granted" && location.lat && location.lon ? (
        <div>
          <Map Location={location} />
        </div>
      ) : permission === "denied" ? (
        <div>
          <p>
            Location access denied. Please enable location access in your
            browser settings.
          </p>
        </div>
      ) : (
        <div>
          {error && <p>{error}</p>}
          <button onClick={requestPermission}>Get Permission</button>
        </div>
      )}
    </div>
  );
};

export default NearBy;
