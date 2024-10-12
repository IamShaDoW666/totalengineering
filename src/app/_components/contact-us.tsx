"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import HeroPage from "./hero-section2";
import MapComponent from "./client/map";

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
  }
]

export default function ContactPage() {
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
                          <MapComponent />
                      </CardContent>
                  </Card>

              </div>
          </div>
      </div></>
  )
}