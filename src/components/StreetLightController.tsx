import React from "react";
import streetLightContorller from '../assets/images/street_light_controler.png'

const StreeLightController: React.FC = () => {
  return (
    <div className="p-2 border border-dashed border-[#3661ff] rounded-3xl">
      <div className="p-4 border rounded-2xl border-[#3661ff]">
        <img src={streetLightContorller} className="object-cover" />
      </div>
    </div>
  );
};

export default StreeLightController;
