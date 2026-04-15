import React from 'react';

const FriendCard = ({ friend }) => {


    console.log(friend)
    return (
        <div className="card w-72 bg-base-100 shadow-xl p-6 flex flex-col items-center border border-gray-100 rounded-2xl">
            <div className="avatar mb-4">
                <div className="w-24 rounded-full">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                    />
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-bold text-[#1e293b]">{friend.name}</h2>
                <p className="text-sm text-slate-400 mt-1 font-medium">{friend.days_since_contact} day ago</p>
            </div>

            <div className="flex  gap-2 mt-4">
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {friend.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="badge badge-lg bg-[#dcfce7] text-[#166534] border-none px-4 py-3 font-semibold text-[10px] tracking-wider uppercase"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>


            <div className="mt-5">
                <button
                    className={`btn btn-sm h-10 px-8 rounded-full border-none text-white text-sm font-bold ${friend.status === 'on-track'
                            ? 'bg-green-600'
                            : friend.status === 'almost due'
                                ? 'bg-[#f3af4e]'
                                : 'bg-red-500'
                        }`}
                >
                    {friend.status}
                </button>
            </div>
        </div>
    );
};

export default FriendCard;