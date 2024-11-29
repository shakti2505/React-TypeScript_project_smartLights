import React from "react";
import StreeLightController from "./StreetLightController";
import gateway from "../assets/images/gateway_png.png";
import cloud from "../assets/images/cloud_based management.png";
import users from "../assets/images/users_png.png";
import evaluation from "../assets/images/evaluation_png.png";
import { motion } from "motion/react";

interface Props {
  // define your props here
}

const EcoSystem: React.FC<Props> = () => {
  return (
    <div className="flex flex-col p-8 lg:p-48 gap-8 bg-custom-linear-gradient-light-Eco-system">
      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        layout
        className="flex flex-col items-start gap-3"
      >
        <div className="inline-block text-left bg-custom-linear-gradient-ecosystem-label p-3 border-transparent">
          <p className="text-xl font-medium text-blue-700">Ecosystem</p>
        </div>
        <p className="text-4xl text-black text-left">
          How does a smart street light ecosystem work?
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full ">
        {/* Street Light Controller */}
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          layout
          className="flex flex-col items-center flex-1"
        >
          <div className="flex flex-row gap-5 items-center">
            <StreeLightController />
            <StreeLightController />
          </div>

          {/* Paragraphs Container */}
          <div className="flex flex-col mt-4 px-4 items-center">
            <p className="text-black text-xs md:text-sm lg:text-base font-bold text-left">
              Street Light Controller
            </p>
            <p className="text-black text-xs md:text-sm lg:text-base">
              Activate/Deactive in response to motion/light sensing and controls
              the brightness of the street lamp.
            </p>
          </div>
        </motion.div>
        {/* Gateway Section */}
        <motion.div
          transition={{ delay: 0.7 }}
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          layout
          className="flex flex-col items-center flex-1"
        >
          <div className="flex flex-row gap-5 items-center border rounded-xl p-5 border-dashed border-[#d3d3d3]">
            <img src={gateway} className="object-cover" />
          </div>

          {/* Paragraphs Container */}
          <div className="flex flex-col items-center mt-4 px-4">
            <p className="text-black text-xs md:text-sm lg:text-base font-bold">
              Gateway
            </p>
            <p className="text-black text-xs md:text-sm lg:text-base text-center">
              Employed for interfacing between a Controller and the Lighting
              Management software.
            </p>
          </div>
        </motion.div>

        {/* Cloud Base Management System */}
        <motion.div
          transition={{ delay: 0.9 }}
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          layout
          className="flex flex-col items-center flex-1"
        >
          <div className="flex flex-row gap-5 items-center border rounded-xl p-3 border-dashed border-[#d3d3d3]">
            <img src={cloud} className="object-cover" />
          </div>

          {/* Paragraphs Container */}
          <div className="flex flex-col items-center mt-4 px-4">
            <p className="text-black text-xs md:text-sm lg:text-base font-bold">
              Cloud-based Management System
            </p>
            <p className="text-black text-xs md:text-sm lg:text-base text-center">
              Collect information from multiple gateways.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        {/* Users section */}
        <motion.div
          transition={{ delay: 1.1 }}
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          layout
          className="flex flex-col items-center flex-1"
        >
          <div className="flex flex-row gap-5 items-center border rounded-xl p-5 border-dashed border-[#d3d3d3]">
            <img src={users} className="object-cover" />{" "}
          </div>

          {/* Paragraphs Container */}
          <div className="flex flex-col items-center mt-4 px-4">
            <p className="text-black text-xs md:text-sm lg:text-base font-bold">
              Users
            </p>
            <p className="text-black text-xs md:text-sm lg:text-base text-center">
              Data from the cloud is used to monitor and control street lights
              by the System Managers
            </p>
          </div>
        </motion.div>

        {/* Evaluation Section */}
        <motion.div
          transition={{ delay: 1.3 }}
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          layout
          className="flex flex-col items-center flex-1"
        >
          <div className="flex flex-row gap-5 items-center border rounded-xl p-3 border-dashed border-[#d3d3d3]">
            <img src={evaluation} className="object-cover" />
          </div>

          {/* Paragraphs Container */}
          <div className="flex flex-col items-center mt-4 px-4">
            <p className="text-black text-xs md:text-sm lg:text-base font-bold">
              Evaluation
            </p>
            <p className="text-black text-xs md:text-sm lg:text-base text-center">
              Gathered insights are used to evaluate the performance of the
              lighting systems.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcoSystem;
