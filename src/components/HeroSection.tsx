import React from "react";
import PlanetEarthFromSpace from "../assets/images/Hero_section.png";
import Button from "./Button";
interface Props {
  // define your props here
}

const HeroSection: React.FC<Props> = () => {
  return (
    <>
      <div className="relative flex justify-center items-center h-screen ">
        {/* Container for text and button */}
        <div className="absolute top-1/4 transform -translate-y-1/2 flex flex-col items-center gap-4 md:gap-12 lg:gap-14 z-10 px-4 mt-14">
          <p className="text-2xl md:text-2xl  font-thin text-[#FFFFFF] text-center">
            Smart Lighting Solution
          </p>
          <p className="text-xl md:text-5xl  font-thin text-[#8296A8] text-center">
            Bringing A New Perspective To Street Lights And The Cities Of
            Tomorrow.
          </p>
          <Button />
        </div>

        {/* Background Image */}
        <img
          src={PlanetEarthFromSpace}
          className="w-full h-full object-cover"
          alt="Planet Earth from Space"
        />
      </div>
    </>
  );
};

export default HeroSection;
