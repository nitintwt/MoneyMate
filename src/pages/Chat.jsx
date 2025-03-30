import React, { useState } from 'react';
import { Send } from 'lucide-react';

function Chat() {
  const [message, setMessage] = useState('');
  //w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        <div className="bg-[#1A1A1A] p-4 rounded-lg mb-4 max-w-2xl">
          <div className="flex items-start gap-3">
            <div className="w-25 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">AI</span>
            </div>
            <p className="text-white">
              Hi there! I'm your expense tracking assistant. You can tell me about your expenses, and I'll help you track them. For example, you can say 'I spent $20 on lunch today'.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your expense..."
          className="w-full bg-[#1A1A1A] text-white p-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-500">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

export default Chat;