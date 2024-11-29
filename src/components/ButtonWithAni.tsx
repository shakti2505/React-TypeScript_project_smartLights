import React from "react";

interface ButtonWithAniProps {
  title: string;
}

const ButtonWithAni: React.FC<ButtonWithAniProps> = ({title}) => {
  return (
    <button className="text-xs p-3 bg-transparent text-[#666666] rounded-full border-[#797979] active:bg-custom-gradient-for-ani-button focus:ring-0">
      {title}
    </button>
  );
};

export default ButtonWithAni;
