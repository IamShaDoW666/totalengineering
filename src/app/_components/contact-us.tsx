"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MapPin } from "lucide-react"
import HeroPage from "./hero-section2";
const GOOGLE_MAPS_API_KEY = "AIzaSyCkeYNFGGgb-zQDLhAv24zgM8tj3Q84ylY";
const address = {
    street: "MGG Palayam",
    city: "Coimbatore",
    state: "ThamilNadu",
    zipCode: "641107",
    country: "India",
    phone: "+919514399331",
    email: "info@totaleng.in",
    lat: 11.12810743055748, // Replace with actual latitude
    lng: 77.08240535155483, // Replace with actual longitude
  };
const locations = [
  {
    name: "Sharjah Office",
    address: "Al Ghanem Warehouse-9",
    phone: "+971 6 542 2701",
    email: "Info@totaleng.ae"
  },
  {
    name: "India Office",
    address: "No.4/68H Sri Kanika Garden",
    phone: "+919514399331",
    email: "Info@totaleng.in"
  },
//   {
//     name: "Tokyo Office",
//     address: "789 Roppongi, Minato City, Tokyo 106-0032",
//     phone: "+81 3-1234-5678",
//     email: "tokyo@example.com"
//   }
]
const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };
  
  const center = {
    lat: address.lat,
    lng: address.lng,
  };
export default function ContactPage() {
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
    <><HeroPage />
    <div className="container mx-auto px-4 py-8">
          {/* <h1 className="text-3xl font-bold mb-8">Contact Us</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-center">
              <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Locations</h2>
                  {locations.map((location, index) => (
                      <Card key={index} className="mb-4">
                          <CardHeader>
                              <CardTitle className="flex items-center">
                                  <MapPin className="mr-2" />
                                  {location.name}
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p>{location.address}</p>
                              <p>Phone: {location.phone}</p>
                              <p>Email: {location.email}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
              <div>
                  <h2 className="text-2xl font-semibold mb-4">Map</h2>
                  <Card>
                      <CardContent className="p-0">
                          <div className="h-[400px] w-full overflow-hidden rounded-lg">
                              {isLoaded ? (
                                  <GoogleMap
                                      mapContainerStyle={mapContainerStyle}
                                      center={center}
                                      zoom={15}
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
          </div>
      </div></>
  )
}