import React from 'react';
import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl"><span className='font-black'>Keen</span>Keeper</a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost"><FaHome></FaHome> Home</a>
        <a className="btn btn-ghost"><RiTimeLine /> Timeline</a>
        <a className="btn btn-ghost"><ImStatsDots /> Stats</a>
      </div>
    </div>
  );
};

export default Navbar;