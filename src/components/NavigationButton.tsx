import React from "react";

interface NavigationButtonProps {
  // define your props here
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; 
}

const NavigationButton: React.FC<NavigationButtonProps> = ({Icon}) => {
  return (
    /* From Uiverse.io by catraco */
    <button className="group cursor-pointer border-none outline-none p-3 bg-[#e4e4e4] opacity-35 hover:bg-slate-500 focus:bg-slate-700">
        <Icon/>
      
    </button>
  );
};

export default NavigationButton;
