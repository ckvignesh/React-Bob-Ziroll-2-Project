import React from "react";
import LightFront from "./components/LightFront";
import LightBack from "./components/LightBack";
import DarkFront from "./components/DarkFront";
import DarkBack from "./components/DarkBack";

export default function App() {
  return (
    <div className="home-page">
      <div className="light-card">
        <LightFront />
        <LightBack />
      </div>
      <div className="dark-card">
        <DarkFront />
        <DarkBack />
      </div>
    </div>
  );
}
