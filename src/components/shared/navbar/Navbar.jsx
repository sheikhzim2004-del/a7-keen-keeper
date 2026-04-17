import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-base-100 shadow p-3 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        <span className="font-black">Keen</span><span className='text-green-500'>Keeper</span>
      </h1>
      <div className="hidden md:flex gap-4">
        <NavLink to={"/"} className={({ isActive }) =>
          `flex items-center gap-1 ${isActive ? "text-green-400 border border-green-500 p-1 rounded-xl" : ""
          }`
        }><FaHome /> Home</NavLink>

        <NavLink to={"/timeline"} className={({ isActive }) =>
          `flex items-center gap-1 ${isActive ? "text-green-400 border border-green-500 p-1 rounded-xl" : ""
          }`
        }><RiTimeLine /> Timeline</NavLink>

        <NavLink to={"/stats"} className={({ isActive }) =>
          `flex items-center gap-1 ${isActive ? "text-green-400 border border-green-500 p-1 rounded-xl" : ""
          }`
        }><ImStatsDots /> Stats</NavLink>
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}><BsThreeDots className='mr-1'/></button>
      </div>


      {open && (
        <div className="absolute right-3 top-14 bg-white shadow p-3 flex flex-col gap-2">
          <NavLink to={"/"} className={({ isActive }) =>
          `flex items-center gap-1 ${isActive ? "text-green-400 border border-green-500 p-1 rounded-xl" : ""
          }`
        }><FaHome /> Home</NavLink>

        <NavLink to={"/timeline"} className={({ isActive }) =>
          `flex items-center gap-1 ${isActive ? "text-green-400 border border-green-500 p-1 rounded-xl" : ""
          }`
        }><RiTimeLine /> Timeline</NavLink>

        <NavLink to={"/stats"} className={({ isActive }) =>
          `flex items-center gap-1 ${isActive ? "text-green-400 border border-green-500 p-1 rounded-xl" : ""
          }`
        }><ImStatsDots /> Stats</NavLink>
        </div>
      )}

    </div>
  );
};

export default Navbar;