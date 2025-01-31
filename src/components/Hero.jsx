import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Hero({ title, description, image }) {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <img
        className="absolute w-full h-full object-cover"
        style={{ filter: "brightness(0.7)" }}
        src={image}
      ></img>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8 opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
