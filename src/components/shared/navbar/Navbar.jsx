import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-base-100 shadow p-3 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        <span className="font-black">Keen</span>Keeper
      </h1>
      <div className="hidden md:flex gap-4">
        <a className="btn  btn-ghost flex items-center gap-1"><FaHome /> Home</a>
        <p className="btn  btn-ghost flex items-center gap-1"><RiTimeLine /> Timeline</p>
        <p className="btn  btn-ghost flex items-center gap-1"><ImStatsDots /> Stats</p>
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>⋮</button>
      </div>


      {open && (
        <div className="absolute right-3 top-14 bg-white shadow p-3 flex flex-col gap-2">
          <p className="flex items-center gap-1"><FaHome /> Home</p>
          <p className="flex items-center gap-1"><RiTimeLine /> Timeline</p>
          <p className="flex items-center gap-1"><ImStatsDots /> Stats</p>
        </div>
      )}

    </div>
  );
};

export default Navbar;