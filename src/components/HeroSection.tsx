import React from "react";
import PlanetEarthFromSpace from "../assets/images/Hero_section.png";
import Button from "./Button";
import { motion } from "motion/react";

interface Props {
  // define your props here
}

const HeroSection: React.FC<Props> = () => {
  return (
    <>
      <div className="relative flex justify-center items-center h-screen ">
        {/* Container for text and button */}
        <div className="absolute top-1/4 transform -translate-y-1/2 flex flex-col items-center gap-4 md:gap-12 lg:gap-14 z-10 px-4 mt-14">
          <motion.p
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            layout
            className="text-2xl md:text-2xl  font-thin text-[#FFFFFF] text-center"
          >
            Smart Lighting Solution
          </motion.p>
          <motion.p
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            layout
            className="text-xl md:text-5xl  font-thin text-[#8296A8] text-center"
          >
            Bringing A New Perspective To Street Lights And The Cities Of
            Tomorrow.
          </motion.p>
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
