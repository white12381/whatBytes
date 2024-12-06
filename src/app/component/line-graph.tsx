"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineGraph = () => {
  // const data = [
  //   {
  //     name: "0",
  //     uv: 4000,
  //     pv: 300,
  //     amt: 2400,
  //   },
  //   {
  //     name: "25",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "50",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "75",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "100",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  // ];
  const data = [
    {
      numberOfStudents: 1,
      name: 0,
    },
    {
      numberOfStudents: 3,
    },
    {
      numberOfStudents: 6,
    },
    {
      numberOfStudents: 7,
    },
    {
      numberOfStudents: 6,
    },
    {
      numberOfStudents: 9,
      name: 25,
    },
    {
      numberOfStudents: 14,
    },
    {
      numberOfStudents: 16,
    },
    {
      numberOfStudents: 18,
    },
    {
      numberOfStudents: 25,
    },
    {
      numberOfStudents: 23,
      name: 50,
    },
    {
      numberOfStudents: 18,
    },
    {
      numberOfStudents: 16,
    },
    {
      numberOfStudents: 14,
    },
    {
      numberOfStudents: 12,
    },
    {
      numberOfStudents: 10,
      name: 75,
    },
    {
      numberOfStudents: 8,
    },
    {
      numberOfStudents: 6,
    },
    {
      numberOfStudents: 5,
    },
    {
      numberOfStudents: 4,
    },
    {
      numberOfStudents: 1,
      name: 100,
    },
  ];
  return (
    <div style={{ width: "100%", height: "300px" }} className="mt-1">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={550} height={300} data={data}>
          <XAxis dataKey="name" />
          <Tooltip
            content={
              <p style={{ color: "grey", fontWeight: "bold" }}>
                your percentile
              </p>
            }
          />
          <Line type="monotone" dataKey="numberOfStudents" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default LineGraph;
