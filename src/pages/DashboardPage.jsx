import React, { useState } from "react";
import { FaTools, FaHome, FaBell } from "react-icons/fa";
import ToggleSwitch from "../components/ToggleSwitch";
import AlertBulb from "../components/AlertBulb";
import { MdOutlineQuestionMark } from "react-icons/md";

const DashboardPage = () => {
  const [toggleStates, setToggleStates] = useState([
    { status: false, name: "Toggle 1" },
    { status: false, name: "Toggle 2" },
    { status: false, name: "Toggle 3" },
    { status: false, name: "Toggle 4" },
  ]);

  return (
    <div className="min-h-screen  w-full flex bg-gray-100">
      <div className=" w-[100%] flex-col flex items-center mx-auto">
        <h1 className="text-[50px] uppercase font-bold my-7">Home screen</h1>
        <div className="flex p-6  gap-32">
          <div className="flex flex-col gap-16">
            <ToggleSwitch title={"PROCESS ON/OFF"} />
            <ToggleSwitch title={"REV DIRECTION"} />
          </div>
          <div className="flex flex-col gap-16">
            <ToggleSwitch title={"DRIVE RESET"} />
            <ToggleSwitch title={"PROCESS ON/OFF"} />
          </div>

          <button className="absolute right-16 rounded-full border-[4px] h-36 w-36 border-red-500 top-[220px] flex items-center justify-center flex-col ">
            <MdOutlineQuestionMark size={80} color="red" />
            <span className="uppercase text-xl text-red-500 font-bold">
              Help
            </span>
          </button>
        </div>

        <div className="flex justify-between w-[700px] items-center mt-10">
          <AlertBulb level={"Level Status"} status={true} />
          <AlertBulb level={"ST1 Level Status"} status={false} />
          <AlertBulb level={"Drive Status"} status={true} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
