import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaTools, FaHome, FaBell } from "react-icons/fa";

const LayoutPage = () => {
  return (
    <div className="flex min-w-screen ">
      <div className="bg-white shadow-lg p-6 min-h-screen">
        <div className="space-y-10 mt-20 h-full">
          <Link to={"/maintainance"} className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
            <FaTools size={54} />
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
            <FaHome size={54} />
          </Link>
          <div className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
            <FaBell size={54} color="red" />
          </div>
        </div>
      </div>

      <div className="w-screen bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
