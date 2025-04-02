import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: 'AI',
      text: "Hi there! I'm your expense tracking assistant. You can tell me about your expenses, and I'll help you track them."
    }
  ]);
  const [message, setMessage] = useState('');
  const cookies = useCookies();

  const handleSubmit = async () => {
    if (!message.trim()) return;
    
    const userMessage = { sender: 'User', text: message };
    setMessages([...messages, userMessage]);
    setMessage('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_AWS_API}/api/v1/user/addExpense`, {
        userText: message,
        userId: cookies[0].userData._id
      });
      console.log(response)

      const aiMessage = {
        sender: 'AI',
        text: response.data.message || "Something went wrong, please try again."
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Something went wrong", error);
      setMessages((prevMessages) => [...prevMessages, { sender: 'AI', text: "Oops! I couldn't process that. Try again." }]);
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] lg:h-[calc(100vh-4rem)] flex flex-col p-4">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`p-4 rounded-lg text-white  max-w-2xl ${msg.sender === 'AI' ? 'bg-[#1A1A1A]' : 'bg-blue-600 self-end'}`}>
            <div className="flex items-start gap-3">
              {msg.sender === 'AI' && (
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  AI
                </div>
              )}
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your expense..."
          className="w-full bg-[#1A1A1A] text-white p-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button onClick={handleSubmit} className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-500">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

export default Chat;