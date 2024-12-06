import Navbar from "@/app/component/navbar";
import Sidebar from "./component/sidebar";
import Image from "next/image";
import { GoGraph } from "react-icons/go";
import LineGraph from "./component/line-graph";
import SyllabusList from "./component/syllabusList";
import PieCharts from "./component/piechart";
import UpdateButton from "./component/updateButton";
import Statistics from "./component/statistics";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-6 h-screen">
        <Sidebar />
        <div className="col-span-5 p-8">
          <p className="font-thin text-sm">Skill test</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-8">
            <div className="space-y-6">
              <section className="skillContainer flex gap-x-3 items-start">
                <Image
                  alt="html5"
                  src={"/asset/images/html5.png"}
                  width={40}
                  height={40}
                />
                <div className="space-y-1">
                  <h2>Hyper Text Markup Language</h2>
                  <p className="!text-xs">
                    Questions: 08 | Duration: 15mins | submitted on 5 June 2021
                  </p>
                </div>
                <UpdateButton />
              </section>
              <div className="skillContainer">
                <h3>Quick Statistics</h3>
                <Statistics />
              </div>
              <div className="skillContainer ">
                <div>Comparison Graph</div>
                <div className="flex   items-baseline">
                  <p className="!font-semibold leading-6 !text-sm">
                    <span className="font-bold">You scored 90% percentile</span>
                    which is lower than the average percentile 72% of all the
                    engineers who took the assessment
                  </p>
                  <div className="circle !w-20">
                    <GoGraph className="icon" style={{ color: "red" }} />
                  </div>
                </div>
                <LineGraph />
              </div>
            </div>
            <div className="space-y-6">
              <section className="skillContainer">
                <h4>Syllabus Wise Analysis</h4>
                <div className="mt-4 w-full space-y-4">
                  <SyllabusList
                    text="HTML Tools, Forms, History"
                    color="#0055ff"
                    trailColor="#80aaff"
                    percentage={80}
                  />
                  <SyllabusList
                    trailColor="#ffbf80"
                    text="Tags & References in HTML"
                    color="#e67300"
                    percentage={60}
                  />
                  <SyllabusList
                    trailColor="#ffebe6"
                    text="Tables & References in HTML"
                    color=" #e62e00"
                    percentage={24}
                  />
                  <SyllabusList
                    trailColor="#8cd98c"
                    text="Tables & CSS Basis"
                    color="#2d862d"
                    percentage={96}
                  />
                  <div></div>
                </div>
              </section>
              <section className="skillContainer">
                <div className="flex justify-between">
                  <h5>Question Analysis</h5>
                  <h6 className="text-[#0055ff] !font-bold !text-xs">12/15</h6>
                </div>
                <p className="!text-sm mt-4">
                  <span className="!font-bold">
                    You scored 12 questions correct out of 15.{" "}
                  </span>{" "}
                  However it still needs some improvements
                </p>
                <PieCharts />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
