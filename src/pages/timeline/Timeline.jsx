import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendContext';
import { MdAddCall, MdOutlineVideoCall } from 'react-icons/md';
import { BsChatRightTextFill } from 'react-icons/bs';

const typeIcon = (type) => {
  if (type === "Call") return <MdAddCall className="text-xl" />;
  if (type === "Text") return <BsChatRightTextFill className="text-xl" />;
  if (type === "Video") return <MdOutlineVideoCall className="text-xl" />;
};

const typeColor = (type) => {
  if (type === "Call") return "bg-green-100 text-green-600";
  if (type === "Text") return "bg-blue-100 text-blue-600";
  if (type === "Video") return "bg-purple-100 text-purple-600";
};

const Timeline = () => {
  const { stored = [] } = useContext(FriendContext);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" 
    ? stored 
    : stored.filter(item => item.type === filter);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Timeline</h2>

      {/* Filter Dropdown */}
      <select
        className="select select-bordered w-full max-w-xs mb-6"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      {/* Timeline List */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">No Activity Yet</p>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border-b last:border-b-0 hover:bg-base-200 transition"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${typeColor(item.type)}`}>
                {typeIcon(item.type)}
              </div>

              {/* Info */}
              <div>
                <p className="font-semibold">
                  {item.type}{" "}
                  <span className="font-normal text-gray-500">with {item.name}</span>
                </p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;