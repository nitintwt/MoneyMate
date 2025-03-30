import React from 'react';
import { Utensils, ShoppingBasket, Home, Zap } from 'lucide-react';

function Reports() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Reports</h1>

      <div className="flex gap-4 mb-8">
        <button className="bg-[#1A1A1A] text-white px-6 py-2 rounded-lg">Summary</button>
        <button className="text-gray-400 px-6 py-2">Categories</button>
        <button className="text-gray-400 px-6 py-2">Trends</button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-[#1A1A1A] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Total Expenses</h2>
          <p className="text-4xl font-bold text-white">$300.00</p>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Expense Breakdown</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-white mb-2">
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-blue-600" />
                  <span>Utilities</span>
                </div>
                <span>$120.00 (40.0%)</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full">
                <div className="h-full w-[40%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-white mb-2">
                <div className="flex items-center gap-2">
                  <Home size={20} className="text-blue-600" />
                  <span>Home</span>
                </div>
                <span>$100.00 (33.3%)</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full">
                <div className="h-full w-[33.3%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-white mb-2">
                <div className="flex items-center gap-2">
                  <ShoppingBasket size={20} className="text-blue-600" />
                  <span>Groceries</span>
                </div>
                <span>$60.00 (20.0%)</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full">
                <div className="h-full w-[20%] bg-blue-600 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-white mb-2">
                <div className="flex items-center gap-2">
                  <Utensils size={20} className="text-blue-600" />
                  <span>Food & Drinks</span>
                </div>
                <span>$20.00 (6.7%)</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full">
                <div className="h-full w-[6.7%] bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;