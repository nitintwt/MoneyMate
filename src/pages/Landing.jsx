import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  MessageSquare, 
  Shield, 
  Zap,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Check,
  ArrowRight,
  Plus,
  PieChart,
  Bell,
  Smartphone
} from 'lucide-react';
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import {NavLink, useNavigate } from "react-router-dom"

function Landing() {
  const [cookies] = useCookies()
  const navigate = useNavigate()

  useEffect(() => {
    if (cookies?.userData?._id) {
      navigate("/dashboard")
    }
  }, [cookies, navigate])

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#1A1A1A]/80 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">E</span>
              </div>
              <span className="text-xl font-bold">MoneyMate</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-blue-500">Features</a>
              <a href="#how-it-works" className="hover:text-blue-500">How it Works</a>
              <a href="#pricing" className="hover:text-blue-500">Pricing</a>
              <a href="#faq" className="hover:text-blue-500">FAQ</a>
              <Link 
                to="/signup"
                className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Expense Tracking for
              <span className="text-blue-500"> Modern Life</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Take control of your finances with MoneyMate. Track expenses, get insights, and make better financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Get Started Free
                <ChevronRight size={20} />
              </Link>
              <a
                href="#features"
                className="bg-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-[#2A2A2A] transition-colors w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to track expenses</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful features to help you take control of your spending and make informed financial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
              <p className="text-gray-400">Get detailed insights into your spending patterns with beautiful charts and reports.</p>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-gray-400">Chat with our AI to quickly add expenses and get personalized financial advice.</p>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bank-Grade Security</h3>
              <p className="text-gray-400">Your financial data is protected with the highest level of encryption and security.</p>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-400">Add expenses on the go and see your spending updates in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How MoneyMate Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Track your expenses in three simple steps and take control of your finances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Plus className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Add Expenses</h3>
                <p className="text-gray-400">Quickly add expenses through our chat interface or dashboard.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="text-blue-500" size={24} />
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Get Insights</h3>
                <p className="text-gray-400">View detailed reports and analytics about your spending habits.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="text-blue-500" size={24} />
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                <Bell className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Stay on Track</h3>
              <p className="text-gray-400">Get notifications and recommendations to improve your finances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">Perfect for personal expense tracking</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-blue-500" size={20} />
                  <span>Unlimited expense tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-blue-500" size={20} />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-blue-500" size={20} />
                  <span>Mobile app access</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="block w-full bg-blue-600 text-center px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-blue-600 p-6 rounded-lg relative">
              <div className="absolute -top-4 right-4 bg-blue-500 px-4 py-1 rounded-full text-sm">
                Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-200">/month</span>
                </div>
                <p className="text-gray-200">For power users who want more insights</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-white" size={20} />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" size={20} />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" size={20} />
                  <span>AI-powered insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" size={20} />
                  <span>Custom categories</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="block w-full bg-white text-blue-600 text-center px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">For teams and businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-blue-500" size={20} />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-blue-500" size={20} />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-blue-500" size={20} />
                  <span>Role-based access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-blue-500" size={20} />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                to="/"
                className="block w-full bg-blue-600 text-center px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-400">
                Yes, we use bank-grade encryption to protect your data. Your security is our top priority.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can I export my data?</h3>
              <p className="text-gray-400">
                Yes, you can export your data in various formats including CSV and PDF.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is there a mobile app?</h3>
              <p className="text-gray-400">
                Yes, we have mobile apps for both iOS and Android platforms.
              </p>
            </div>

            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-400">
                Yes, you can cancel your subscription at any time with no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start tracking your expenses today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who are taking control of their finances with MoneyMate.
            </p>
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Get Started Free
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">M</span>
                </div>
                <span className="text-xl font-bold">MoneyMate</span>
              </div>
              <p className="text-gray-400">Smart expense tracking for modern life.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How it Works</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MoneyMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;