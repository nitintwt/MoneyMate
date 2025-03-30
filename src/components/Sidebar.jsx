import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, BarChart2, Settings, Plus } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 bg-[#1A1A1A] text-white p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-xl font-bold">MoneyMate</h1>
      </div>

      <nav className="flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-blue-600' : 'hover:bg-[#2A2A2A]'
            }`
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-blue-600' : 'hover:bg-[#2A2A2A]'
            }`
          }
        >
          <MessageSquare size={20} />
          <span>Chat</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-blue-600' : 'hover:bg-[#2A2A2A]'
            }`
          }
        >
          <BarChart2 size={20} />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-blue-600' : 'hover:bg-[#2A2A2A]'
            }`
          }
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <button className="w-full bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center gap-2">
        <Plus size={20} />
        <span>New Expense</span>
      </button>
    </div>
  );
}

export default Sidebar;