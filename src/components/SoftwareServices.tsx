import React from "react";
import electricitySaving from "../assets/images/lamp-2147458_640.png";

const SoftwareServices: React.FC = () => {
  return (
    <div
      id="softwareService"
      className="flex flex-col items-center justify-center p-8 lg:p-32 bg-white gap-5"
    >
      <p className="text-2xl lg:text-3xl text-black font-medium text-center">
        The Platform assists city managers on multiple stages
      </p>
      <div className="flex flex-col w-full">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full border-b-2 border-[#EDEEEE]">
          <div className="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-[#EDEEEE] p-5 gap-3 flex-2">
            <img src={electricitySaving} className="h-14 w-14" />
            <p className="text-xl lg:text-2xl text-black text-left">
              Saves on power consumption & related
            </p>
          </div>
          <div className="flex flex-col p-5  flex-1">
            <img src={electricitySaving} className="h-14 w-14" />
            <p className="text-xl lg:text-2xl text-black text-left">
              Lower downtimes
            </p>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full border-b-2 border-[#EDEEEE]">
          <div className="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-[#EDEEEE] p-5 gap-3 flex-1">
            <img src={electricitySaving} className="h-14 w-14" />
            <p className="text-xl lg:text-2xl text-black text-left">
              Detects Power theft
            </p>
          </div>
          <div className="flex flex-col p-5 gap-3 flex-1">
            <img src={electricitySaving} className="h-14 w-14" />
            <p className="text-xl lg:text-2xl text-black text-left">
              Ensure smart monitoring and control of the street lights
              infrastructure
            </p>
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full">
          <div className="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-[#EDEEEE] p-5 gap-3 flex-1">
            <img src={electricitySaving} className="h-14 w-14" />
            <p className="text-xl lg:text-2xl text-black text-left">
              Ensure real time actionable analytics on power failure, lamp
              malfunction, voltage failure, etc.
            </p>
          </div>
          <div className="flex flex-col p-5 gap-3 flex-2">
            <img src={electricitySaving} className="h-14 w-14" />
            <p className="text-xl lg:text-2xl text-black text-left">
              Ensure security in the neighborhood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
