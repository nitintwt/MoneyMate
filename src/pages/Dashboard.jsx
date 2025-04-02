import React, { useEffect, useState } from 'react';
import { Utensils, ShoppingBasket, ShoppingBag, Bus, Film, Zap, Heart, Home } from 'lucide-react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const categories = [
  { name: 'Food', icon: Utensils, amount: 0.00, color: 'blue' },
  { name: 'Groceries', icon: ShoppingBasket, amount: 0.00, color: 'blue' },
  { name: 'Shopping', icon: ShoppingBag, amount: 0.00, color: 'blue' },
  { name: 'Transport', icon: Bus, amount: 0.00, color: 'blue' },
  { name: 'Entertainment', icon: Film, amount: 0.00, color: 'blue' },
  { name: 'Utilities', icon: Zap, amount: 0.00, color: 'blue' },
  { name: 'Health', icon: Heart, amount: 0.00, color: 'blue' },
  { name: 'Home', icon: Home, amount: 0.00, color: 'blue' },
];

function Dashboard() {
  const cookies = useCookies();
  const [expenses, setExpenses] = useState([]);
  const [categoryTotals, setCategoryTotals] = useState(categories);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_AWS_API}/api/v1/user/allExpense?userId=${cookies[0].userData._id}`);
        const expensesData = response.data.data.expenses;
        console.log("response expenses", expensesData);
        setExpenses(expensesData);

        const categoryTotals = categories.map(category => {
          const total = expensesData
            .filter(expense => expense.category === category.name)
            .reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
          return { ...category, amount: total };
        });

        setCategoryTotals(categoryTotals);
      } catch (error) {
        console.log("Something went wrong while trying to fetch all expenses", error);
      }
    };

    fetchExpenses();
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Expense Tracker</h1>
      
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryTotals.map((category) => (
            <div key={category.name} className="bg-[#1A1A1A] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-blue-600" size={24} />
                <span className="text-white">{category.name}</span>
              </div>
              <p className="text-2xl font-bold text-white">₹{category.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-6">Expenses</h2>
        {expenses.map((expense) => (
          <div key={expense._id} className="bg-[#1A1A1A] p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-white font-medium">{expense.description}</h4>
                <p className="text-gray-400">{expense.category} - {new Date(expense.date).toLocaleDateString()}</p>
              </div>
              <p className="text-white font-medium">₹{parseFloat(expense.amount).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
