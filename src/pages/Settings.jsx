import React from 'react';

function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

      <div className="max-w-2xl">
        <div className="bg-[#1A1A1A] p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">Profile</h2>
          <p className="text-gray-400 mb-6">Manage your account settings and preferences.</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
            <div>
              <h3 className="text-white font-medium">Nitin Singh</h3>
              <p className="text-gray-400">nitin@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                value="Nitin Singh"
                className="w-full bg-[#2A2A2A] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                value="nitin@example.com"
                className="w-full bg-[#2A2A2A] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Preferences</h2>
          <p className="text-gray-400 mb-6">Customize your expense tracking experience.</p>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Dark Mode</h3>
              <p className="text-gray-400">Toggle between light and dark themes.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;