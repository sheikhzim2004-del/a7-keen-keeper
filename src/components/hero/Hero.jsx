import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center container mx-auto text-center space-y-6 my-10'>
            <div>
                <h1 className='text-2xl md:text-5xl mx-2 font-bold mb-4'>Friends to keep close in your life</h1>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
            </div>
            <button className='btn bg-[#244D3F] text-white'><FaPlus /> Add a Friend</button>
        </div>
    );
};

export default Hero;