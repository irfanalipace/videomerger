import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import LeftBar from '../components/LeftBar/LeftBar'

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="" style={{ background: 'linear-gradient(107.5deg, #10102E 2.76%, #13122E 20.06%, #221D31 34.82%, #5A463A 60.62%, #856540 69.07%, #F5B752 97.79%)' }}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
        <LeftBar/>
      </div>
    </div>
  );
};

export default DefaultLayout;
