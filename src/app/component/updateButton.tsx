"use client";

import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";
import ModalInput from "./modalInput";
import { FaArrowRight } from "react-icons/fa";
import useStore from "../store/store";

const UpdateButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const setInfo = useStore((state: any) => state.setInfo);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInfo({
      rank: parseInt(e.target.elements["Rank"].value),
      percentage: parseInt(e.target.elements["Percentile"].value),
      score: parseInt(e.target.elements["score"].value),
    });
    // alert(e.target.elements["Percentile"].value);
    setOpenModal(false);
  };
  
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="text-white bg-blue-800 hover:bg-blue-800/90 font-bold border-2 border-black p-1 px-4 rounded-md text-xs"
      >
        Update
      </button>
      <Modal
        closeIcon={null}
        height={100}
        width={"50%"}
        open={openModal}
        onClose={() => setOpenModal(false)}
        footer={null}
        title={null}
      >
        <div className="flex justify-between items-center">
          <p className="text-black font-bold text-xl">Update Score</p>
          <Image
            src={"/asset/images/html5.png"}
            alt="html5"
            width={35}
            height={35}
          />
        </div>
        <form onSubmit={handleSubmit} className="my-4">
          <div className="space-y-4">
            <ModalInput
              placeholder="Rank"
              page={1}
              name="Rank"
              text="Update Your"
              boldText="Rank"
            />
            <ModalInput
              page={2}
              max={100}
              placeholder="Percentile"
              name="Percentile"
              text="Update Your"
              boldText="Percentile"
            />
            <ModalInput
              max={15}
              page={3}
              placeholder="Current Score"
              name="score"
              text="Update Your"
              boldText="Current Score (out of 15)"
            />
          </div>
          <div className="flex justify-end mt-6 gap-x-8 mr-4">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="text-blue-900 text-xs font-semibold border border-blue-900 p-2 px-3 rounded-lg"
            >
              cancel
            </button>
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-900/90 text-white font-bold text-xs border border-black p-2 rounded-lg px-6"
            >
              Save
              <FaArrowRight className="text-white inline-block mx-1" />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default UpdateButton;
