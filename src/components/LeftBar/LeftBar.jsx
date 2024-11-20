import React, { useState } from "react";
import { FaArrowAltCircleRight, FaLayerGroup, FaTshirt } from "react-icons/fa";
import {
  GiBallerinaShoes,
  GiBowieKnife,
  GiSwapBag,
  GiTrousers,
} from "react-icons/gi";
import { ImAccessibility } from "react-icons/im";
import { MdElectricBolt } from "react-icons/md";
import { RiGlasses2Fill, RiLockFill, RiMentalHealthFill } from "react-icons/ri";
import Layer from "../Layer";
import Categories from "../Categories";

const LeftBar = () => {
  const [showLayer, setShowLayer] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showColorBox, setShowColorBox] = useState(false); 

  const colors = [
    "#8B8B8B", "#EE0303", "#1E00FF", "#00FF80", "#F0FF24", 
    "#DAB81F", "#EE03FF", "#CE1354", "#0DB793", "#950A72", 
    "#A60407", "#3AE700", "#07FFFF", "#007FD3", "#FFFFFF", "#5700D9"
  ];
  const handleLayerClick = () => {
    setShowLayer((prevShowLayer) => !prevShowLayer);
  };

  const handleCategoryClick = () => {
    setShowCategory((prevShowCategory) => !prevShowCategory);
  };

  const data = [1, 2, 3];

  return (
    <div className="flex lg:w-115 md:w-115">
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="block md:hidden p-2 fixed top-1 right-8 z-50"
      >
        <FaArrowAltCircleRight className="text-primary text-3xl" />
      </button>

      <div
        className={`fixed top-0 ${
          isSidebarVisible ? "right-0" : "-right-full"
        } md:left-0 md:relative z-40 transition-all duration-300 w-100 bg-leftPrimary`}
      >
        <div className="flex items-center justify-center py-8">
          <p className="text-black text-xl md:text-3xl lg:3xl bg-primary px-5 py-1 rounded-full text-center">
            Random Generator
          </p>
        </div>

        {showLayer && (
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-black bg-opacity-50">
            <Layer onClose={handleLayerClick} />
          </div>
        )}

        {showCategory && (
          <div className="absolute top-[31%] left-0 w-full z-20 bg-transparent">
            <Categories />
          </div>
        )}

        <div className="border-t-2 border-primary flex flex-col mt-8">
          <div className="flex">
            <div className="flex items-center gap-2 p-2">
              <p className="text-primary font-semibold">General Tags:</p>
              <p
                className="bg-primary px-8 py-3 rounded-full"
                onClick={handleCategoryClick}
              ></p>
              <p
                className="bg-primary px-8 py-3 rounded-full"
                onClick={handleCategoryClick}
              ></p>
              <p
                className="bg-primary h-6 w-6 rounded-full"
                onClick={handleCategoryClick}
              ></p>
            </div>
            <div className="relative flex items-center pl-8 gap-2">
              <div className="absolute left-7 h-13 top-0 bottom-0 w-[2px] transform rotate-45 origin-top-left bg-primary"></div>
              <button className="h-6 w-6 bg-white border-2 border-primary rounded-full z-10" onClick={() => setShowColorBox(!showColorBox)}></button>
              <RiLockFill className="text-3xl text-primary z-10" />
            </div>
          </div>


          {showColorBox && ( 
            <div className="absolute top-16 left-10 bg-black border border-gray-300 rounded-md p-3 grid grid-cols-4 gap-2 z-30">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 cursor-pointer rounded-full"
                  style={{ backgroundColor: color }}
                  onClick={() => console.log(`Selected color: ${color}`)} 
                ></div>
              ))}
            </div>
          )}

          <div>
            {data.map((item, index) => (
              <div
                key={index}
                className="border-t-2 border-borderOpacity border-b-2"
              >
                <p className="bg-primary px-6 inline-block text-black text-xl">
                  Set Name
                </p>
                <div className="flex items-center justify-between p-6">
                  <FaLayerGroup
                    onClick={handleLayerClick}
                    className="text-primary text-4xl cursor-pointer"
                  />
                  <RiLockFill className="text-primary text-4xl" />
                </div>
                <div className="flex border-t-2 border-primary">
                  <div className="flex items-center gap-2 p-2">
                    <p className="text-primary font-semibold">General Tags:</p>
                    <p className="bg-primary px-8 py-3 rounded-full"></p>
                    <p className="bg-primary px-8 py-3 rounded-full"></p>
                    <p className="bg-primary h-6 w-6 rounded-full"></p>
                  </div>
                  <div className="relative flex items-center pl-8 gap-2">
                    <div className="absolute left-7 h-13 top-0 bottom-0 w-[2px] transform rotate-45 origin-top-left bg-primary"></div>
                    <button className="h-6 w-6 bg-white border-2 border-primary rounded-full z-10" onClick={() => setShowColorBox(!showColorBox)}></button>
                    <RiLockFill className="text-3xl text-primary z-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-15 w-full flex flex-col items-center gap-6 justify-center border-l-[3px] border-primary bg-leftPrimary">
        <ImAccessibility className="text-primary text-2xl" />
        <RiMentalHealthFill className="text-primary text-2xl" />
        <FaTshirt className="text-primary text-2xl" />
        <GiTrousers className="text-primary text-2xl" />
        <GiBallerinaShoes className="text-primary text-2xl" />
        <GiSwapBag className="text-primary text-2xl" />
        <RiGlasses2Fill className="text-primary text-2xl" />
        <GiBowieKnife className="text-primary text-2xl" />
        <MdElectricBolt className="text-primary text-2xl" />
      </div>
    </div>
  );
};

export default LeftBar;
