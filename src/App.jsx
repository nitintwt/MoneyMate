import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Chat from './pages/Chat.jsx';
import Reports from './pages/Reports.jsx';
import Settings from './pages/Settings.jsx';
import Landing from './pages/Landing.jsx';
import { Menu } from 'lucide-react';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/*"
          element={
            <div className="flex min-h-screen bg-[#121212] relative">
              <button 
                className="lg:hidden fixed top-4 left-4 z-50 text-white bg-blue-600 p-2 rounded-lg"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu size={24} />
              </button>
              
              <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 transition-transform duration-300 ease-in-out`}>
                <Sidebar onClose={() => setSidebarOpen(false)} />
              </div>
              
              <main className="flex-1 p-4 lg:p-8 pt-20 lg:pt-8">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;