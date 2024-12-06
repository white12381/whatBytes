"use client";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { PiBookBookmarkThin } from "react-icons/pi";
import useStore from "../store/store";

const Statistics = () => {
  const rank = useStore((state: any) => state.rank);
  const percentage = useStore((state: any) => state.percentage);
  const score = useStore((state: any) => state.score);
  return (
    <div className="grid grid-cols-3  divide-x-2 divide-gray-100">
      <div className="statistics">
        <div className="circle">
          <FaTrophy className="icon" style={{ color: "goldenrod" }} />
        </div>
        <div className="space-y-[2px]">
          <div>{rank}</div>
          <p>YOUR RANK</p>
        </div>
      </div>

      <div className="statistics">
        <div className="circle">
          <PiBookBookmarkThin className="icon text-orange-700" />
        </div>
        <div className="space-y-[2px]">
          <div>{percentage}%</div>
          <p>PERCENTILE</p>
        </div>
      </div>

      <div className="statistics">
        <div className="circle relative">
          <Image
            src={"/asset/images/mark.jpg"}
            className="icon"
            width={10}
            height={10}
            alt="mark"
          />
        </div>
        <div className="space-y-[2px]">
          <div>{score}/15</div>
          <p>CORRECT ANSWERS</p>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
