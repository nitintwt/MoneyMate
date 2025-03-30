import React from 'react';
import { Utensils, ShoppingBasket, ShoppingBag, Bus, Film, Zap, Heart, Home } from 'lucide-react';

const categories = [
  { name: 'Food & Drinks', icon: Utensils, amount: 20.00, color: 'blue' },
  { name: 'Groceries', icon: ShoppingBasket, amount: 60.00, color: 'blue' },
  { name: 'Shopping', icon: ShoppingBag, amount: 0.00, color: 'blue' },
  { name: 'Transport', icon: Bus, amount: 0.00, color: 'blue' },
  { name: 'Entertainment', icon: Film, amount: 0.00, color: 'blue' },
  { name: 'Utilities', icon: Zap, amount: 120.00, color: 'blue' },
  { name: 'Health & Fitness', icon: Heart, amount: 0.00, color: 'blue' },
  { name: 'Home', icon: Home, amount: 100.00, color: 'blue' },
];

const expenses = [
  {
    date: 'Oct 18, 2024',
    items: [
      { name: 'Lunch Out with Friends', category: 'Food & Drinks', amount: 20.00 },
      { name: 'Weekly Grocery Shopping', category: 'Groceries', amount: 60.00 },
    ]
  },
  {
    date: 'Oct 17, 2024',
    items: [
      { name: 'Electricity Bill', category: 'Utilities', amount: 120.00 },
      { name: 'Rent', category: 'Home', amount: 100.00 },
    ]
  }
];

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Expense Tracker</h1>
      
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Categories</h2>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="bg-[#1A1A1A] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-blue-600" size={24} />
                <span className="text-white">{category.name}</span>
              </div>
              <p className="text-2xl font-bold text-white">${category.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Expenses</h2>
          <div className="flex gap-2">
            <button className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg">Daily</button>
            <button className="text-gray-400 px-4 py-2">Monthly</button>
            <button className="text-gray-400 px-4 py-2">Calendar</button>
            <button className="text-gray-400 px-4 py-2">History</button>
          </div>
        </div>

        {expenses.map((day) => (
          <div key={day.date} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-white font-medium">{day.date}</h3>
              <span className="text-gray-400">{day.items.length}</span>
            </div>
            
            {day.items.map((expense) => (
              <div key={expense.name} className="bg-[#1A1A1A] p-4 rounded-lg mb-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                    <Utensils className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{expense.name}</h4>
                    <p className="text-gray-400">{expense.category}</p>
                  </div>
                </div>
                <p className="text-white font-medium">${expense.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Dashboard;