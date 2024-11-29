import React from "react";

const Button: React.FC = () => {
  return (
    <div className="relative group">
      {/* Button */}
      <button className="bg-blue-500 text-white py-2 px-4 sm:py-2.5 sm:px-6 md:py-1.5 md:px-9 rounded hover:bg-blue-600">
        Login
      </button>

      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition duration-200 transform group-hover:translate-y-0 -translate-y-2">
        <div className="bg-slate-800 text-white rounded-lg px-4 py-2 shadow-lg">
          <p className="font-bold text-md mb-1">Upcoming feature 👋</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
