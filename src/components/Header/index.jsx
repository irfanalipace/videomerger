import React from "react";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-99 flex w-full bg-transparent">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm"
        >
          {/* Hamburger Icon */}
          <span className="relative block h-5.5 w-5.5 cursor-pointer">
            <span className="du-block absolute right-0 h-full w-full">
              <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${!sidebarOpen && "!w-full delay-300"}`}></span>
              <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${!sidebarOpen && "delay-400 !w-full"}`}></span>
              <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${!sidebarOpen && "!w-full delay-500"}`}></span>
            </span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
