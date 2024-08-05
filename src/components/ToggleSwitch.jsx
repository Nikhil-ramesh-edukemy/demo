import React from "react";

const ToggleSwitch = ({title}) => {
  return (
    <label className="inline-flex flex-col gap-4 items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-[130px] h-[72px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-red-500 after:content-[''] after:absolute after:top-1.5 after:start-[4px] after:bg-red-500 after:border-gray-300 after:border after:rounded-full after:h-[60px] after:w-[60px] after:transition-all dark:border-gray-200 peer-checked:bg-gray-200 "></div>
      <span className="ms-3 text-2xl font-medium text-gray-900 dark:text-gray-600">
        {title}
      </span>
    </label>
  );
};

export default ToggleSwitch;
