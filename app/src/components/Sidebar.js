import React from "react";
import {
  FaTachometerAlt,
  FaUniversity,
  FaCreditCard,
  FaHandHoldingUsd,
  FaPiggyBank,
  FaChartLine,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#1F2937] text-white p-6 shadow-lg">
      <div className="text-2xl font-bold mb-10 text-center text-[#E80000]">
        Beardo Capital
      </div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-3 rounded cursor-pointer transition">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-3 rounded cursor-pointer transition">
          <FaUniversity />
          <span>Accounts</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-3 rounded cursor-pointer transition">
          <FaCreditCard />
          <span>Cards</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-3 rounded cursor-pointer transition">
          <FaHandHoldingUsd />
          <span>Loans</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-3 rounded cursor-pointer transition">
          <FaPiggyBank />
          <span>Deposits</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-3 rounded cursor-pointer transition">
          <FaChartLine />
          <span>Investments</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 px-4 py-3 rounded cursor-pointer transition">
          <FaUserShield />
          <span>Insurance</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-red-700 px-4 py-3 rounded cursor-pointer transition mt-10">
          <FaSignOutAlt />
          <span>Logout</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
