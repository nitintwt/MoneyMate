import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Button, ButtonGroup} from "@heroui/button";
import { LayoutDashboard, MessageSquare, BarChart2, Settings, Plus, X } from 'lucide-react';

function Sidebar({ onClose }) {
  return (
    <div className="w-[280px] bg-[#1A1A1A] text-white p-4 flex flex-col h-screen">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold">E</span>
          </div>
          <h1 className="text-xl font-bold">MoneyMate</h1>
        </div>
        <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1">
        <NavLink
          to="/dashboard"
          onClick={onClose}
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
          onClick={onClose}
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
          to="/subscription"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg mb-2 ${
              isActive ? 'bg-blue-600' : 'hover:bg-[#2A2A2A]'
            }`
          }
        >
          <BarChart2 size={20} />
          <span>Subscriptions</span>
        </NavLink>

        <NavLink
          to="/settings"
          onClick={onClose}
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
      <div className="p-4 bg-gradient-to-b from-black to-blue-950 rounded-lg shadow-lg text-center mb-4 mx-2">
        <h3 className="text-lg font-bold text-white pb-4">Upgrade to Premium</h3>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 md:flex-1 text-white rounded">
          <Link to='/premium'>Explore Plans</Link>
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
