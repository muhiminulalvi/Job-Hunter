import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A1",
      marks: 60,
    },
    {
      name: "A2",
      marks: 60,
    },
    {
      name: "A3",
      marks: 60,
    },
    {
      name: "A4",
      marks: 60,
    },
    {
      name: "A5",
      marks: 56,
    },
    {
      name: "A6",
      marks: 60,
    },
    {
      name: "A7",
      marks: 60,
    },
  ];
  return (
    <div>
      <div className="bg-purple-100 py-20">
        <h1 className="text-center text-5xl font-bold py-4">
          Assignment Statistics
        </h1>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="marks" />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
