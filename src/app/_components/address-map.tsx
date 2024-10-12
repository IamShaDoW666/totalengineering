"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MapComponent from "./client/map";

export default function AddressMap() {

  return (
    <div className="container mx-auto w-full px-4 md:px-6">
      <Card className="px-4">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Our Location
          </CardTitle>
        </CardHeader>
        <CardContent>
         <MapComponent />
        </CardContent>
      </Card>
    </div>
  );
}
