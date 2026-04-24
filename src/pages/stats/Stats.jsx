import React, { useContext } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FriendContext } from '../../context/FriendContext';

const Stats = () => {
  const { stored } = useContext(FriendContext);

  if (stored.length === 0) {
    return (
      <div className="w-full h-[400px] flex justify-center items-center">
        <h2 className="text-xl font-semibold text-gray-500">
          No activity selected.
        </h2>
      </div>
    );
  }

  const callCount = stored.filter(item => item.type === 'Call').length;
  const textCount = stored.filter(item => item.type === 'Text').length;
  const videoCount = stored.filter(item => item.type === 'Video').length;

  const data = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount }
  ];

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;