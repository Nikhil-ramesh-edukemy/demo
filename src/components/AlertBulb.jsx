import React from "react";

const AlertBulb = ({ level, status }) => {
  return (
    <div className="flex  items-center flex-col gap-4">
      <div
        className={`${
          status ? "bg-red-500" : "bg-gray-500"
        } border-[6px] border-gray-300 w-28 h-28 rounded-full`}
      />
      <h1 className=" text-2xl font-medium text-gray-900 dark:text-gray-600">
        {level}
      </h1>
    </div>
  );
};

export default AlertBulb;
