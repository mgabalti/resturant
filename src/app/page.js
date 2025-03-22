import React from "react";
import NavbarComponent from "./_components/navbar";
import Herosection from "./_components/herosection";
export default function Home() {
  return (
    <div className="h-screen overflow-auto" >
      <div className="absolute top-0 z-50 w-full">
        <NavbarComponent />
      </div>
      <Herosection />
    </div>
  );
}
