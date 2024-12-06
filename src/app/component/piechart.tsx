"use client";
import dynamic from "next/dynamic";

// Dynamically import the PieChart component
const PieCharts = dynamic(
  () => import("recharts").then((mod) => mod.PieChart),
  { ssr: false }
);

import { Pie, Cell } from "recharts";
const COLORS = ["#3b82f6", "#e4e8ed"];

const PieChartsComponent = () => {
  const data = [
    { name: "Completed", value: 80 },
    { name: "Remaining", value: 20 },
  ];

  return (
    <div
      className="mx-auto mt-3"
      style={{ width: "200px", height: "200px", position: "relative" }}
    >
      <PieCharts width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          startAngle={270}
          endAngle={-270}
          paddingAngle={0}
          cornerRadius={50}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieCharts>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <img
          src="/asset/images/flower.png"
          alt="Center Icon"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default PieChartsComponent;
