import React from 'react';

const QuickState = () => {
    return (<>
        <div className='flex justify-between text-center my-10 container mx-auto gap-6'>
            <div className='p-8 shadow-lg rounded-2xl w-full'><h5 className='text-2xl'>10</h5><p>Total Friends</p></div>
            <div className='p-8  shadow-lg rounded-2xl w-full'><h5 className='text-2xl'>03</h5><p>On Track</p></div>
            <div className='p-8  shadow-lg rounded-2xl w-full'><h5 className='text-2xl'>06</h5><p>Need Attention</p></div>
            <div className='p-8  shadow-lg rounded-2xl w-full'><h5 className='text-2xl'>12</h5><p>Interactions This Month</p></div>
        </div>
        <div>
            <hr className="w-full h-[1px] bg-gray-400 border-none my-4 container mx-auto mb-10" />
        </div>
    </>
    );
};

export default QuickState;