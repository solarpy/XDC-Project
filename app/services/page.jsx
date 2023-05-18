import React from "react";
import Header from "../components/Services/header";
import Card from "../components/Services/card";

export default function Services() {
  return (
    <div className="text-4xl">
      <div className="container mx-auto h-screen w-full snap-y snap-mandatory">
        <Header />
        <div className="grid gap-12 grid-cols-4 m-6 pt-12">
          <Card />
          <Card />
          <Card />

          <Card />
        </div>
      </div>
    </div>
  );
}
