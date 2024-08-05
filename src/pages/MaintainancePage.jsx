import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const MaintainancePage = () => {
  return (
    <div className="w-screen flex">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-[50px] mx-auto text-center uppercase font-bold my-3">
          Maintainance
        </h1>

        <div className="">
          <ToggleSwitch title={"MOISTURE"} />
        </div>
      </div>
    </div>
  );
};

export default MaintainancePage;
