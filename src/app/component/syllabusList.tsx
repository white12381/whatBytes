import { Progress } from "antd";

interface props {
  color: string;
  percentage: number;
  text: string;trailColor: string
}
const SyllabusList = ({ color, percentage, text, trailColor }: props) => {
  return (
    <div>
      <p className="!font-medium !text-sm mb-2">{text}</p>
      <div className="flex justify-between space-x-10 items-center">
        {/* <progress
          style={{ backgroundColor: color }}
          className={`w-full rounded-md h-3 `}
          value={percentage}
          max={100}
        ></progress> */}
        <Progress size={{height: 10}} showInfo={false}
         className={`w-full rounded-md`} percent={percentage} strokeColor={color} 
         trailColor={trailColor}
         />
        <p className={`!text-base !font-bold`} style={{ color: color }}>
          {percentage}%
        </p>
      </div>
    </div>
  );
};
export default SyllabusList;
