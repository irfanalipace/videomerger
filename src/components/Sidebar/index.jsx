import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MdDashboardCustomize } from "react-icons/md";
import { FiLogOut } from 'react-icons/fi';
import { TfiMenuAlt } from "react-icons/tfi";
import { FaCircle, FaRegCircle, FaUserMinus } from 'react-icons/fa';
import { BsPersonFillAdd } from 'react-icons/bs';
import { ImUserMinus } from 'react-icons/im';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // Close on outside click
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!sidebar.current || !trigger.current) return;
  //     if (
  //       !sidebarOpen ||
  //       sidebar.current.contains(target) ||
  //       trigger.current.contains(target)
  //     ) return;
  //     setSidebarOpen(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // }, [sidebarOpen]);

  // Close on Escape key press
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen]);

  // Save sidebar state in localStorage
  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    document.body.classList.toggle('sidebar-expanded', sidebarExpanded);
  }, [sidebarExpanded]);
  const items = Array(5).fill(null);
  return (
    <>
      {/* Hamburger Button */}
      <div className='lg:w-72 w-0'>

    
      <button
        ref={trigger}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed  z-50 p-1 text-white "
      >
       <TfiMenuAlt className="text-primary h-10 w-10"/>
      </button>
      
      </div>
      {/* Sidebar */}
      <aside
        ref={sidebar}
        className={`fixed left-0 top-0 z-40 h-full  w-72 bg-secondary transition-transform duration-300 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-end justify-end">
          {/* Close Button for Sidebar */}
          <button
            className="text-black bg-primary py-1 px-3 rounded-lg font-bold"
          >
            Login/Logout
          </button>
        </div>
        <div className='flex flex-col items-center justify-center py-8 border-b-[4px] border-black'>
          <div className='flex items-center gap-4'>
          <div className='border-2 border-black rounded-full'>
<FaCircle className="text-green-600 text-lg"/>
</div>
<p className='text-primary text-2xl'>User</p>
        </div>
          </div>

          <div className='flex flex-col items-center justify-center py-8 border-b-[4px] border-black'>
          <Link to={'/about'}>
         
          <button 
            className="text-black bg-primary py-0 px-12 rounded-full font-semibold text-lg"
          >
            About
          </button>
          </Link>
          </div>

          <div>
      {items.map((_, index) => (
        <div key={index} className='flex flex-col border-b-[4px] border-black'>
          <div className='py-6 flex items-center justify-center '>
            <BsPersonFillAdd className="text-primary h-12 w-12"/>
          </div>
          <div className="grid grid-cols-12 bg-primary">
            <div className="col-span-4 bg-secondary mt-1 p-1 flex justify-center">
              <FaUserMinus className="text-primary "/>
            </div>
            <div className="col-span-8 text-black flex justify-center">
              Name
            </div>
          </div>
        </div>
      ))}
    </div>

      </aside>
    </>
  );
};

export default Sidebar;
