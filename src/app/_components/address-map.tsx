"use client";

import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Replace with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = "AIzaSyCkeYNFGGgb-zQDLhAv24zgM8tj3Q84ylY";

const address = {
  street: "MGG Palayam",
  city: "Coimbatore",
  state: "ThamilNadu",
  zipCode: "641107",
  country: "India",
  phone: "+919514399331",
  email: "info@totaleng.in",
  lat: 11.12810743055748, 
  lng: 77.08240535155483, 
};

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: address.lat,
  lng: address.lng,
};

export default function AddressMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const [_, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <div className="container mx-auto w-full px-4 md:px-6">
      <Card className="px-4">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Our Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full overflow-hidden rounded-lg">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={16}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200">
                <p>Loading map...</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
