import React from "react";
import { FaCircleLeft } from "react-icons/fa6";

const Layer = ({ onClose }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="w-full h-full bg-secondary flex flex-col items-start justify-start p-3 relative">
      <div onClick={onClose} className="cursor-pointer">
        <FaCircleLeft className="text-primary text-3xl" />
      </div>

      <div className="grid grid-cols-12 gap-5 mt-3">
        {arr.map((val, ind) => (
          <div
            key={ind}
            className="col-span-4 border-2 border-borderOpacity h-28 w-28 bg-black rounded-xl"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Layer;
