import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import { API_BASE_URL } from '../../constants';
import { FaRobot, FaTimes } from 'react-icons/fa'; // Fancy icon for the button

const Chatbot = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user's message
    setMessages([...messages, { text: input, type: 'user' }]);

    try {
      // Send request to backend API
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }), // Assuming `form` is a JavaScript object
      });
      const data = await response.json();
      // Add AI's response
      setMessages([...messages, { text: input, type: 'user' }, { text: data.response, type: 'ai' }]);
    } catch (error) {
      console.error('Error fetching response from backend:', error);
    }

    setInput('');
  };

  return (
    <div className='relative flex flex-col h-full w-96 md:max-w-md bg-[#F3F3F3] text-white border border-purple-700 rounded-lg shadow-lg'>
      <div className='flex-shrink-0 p-2 bg-purple-600 text-white rounded-t-lg font-semibold flex items-center justify-between'>
        <span>Ask Gini</span>
        <FaRobot className='text-xl' />
        <button onClick={onClose} className='text-white hover:text-gray-300'>
          <FaTimes className='text-xl' />
        </button>
      </div>
      <div className='flex-1 overflow-y-auto p-4'>
        {messages.map((message, index) => (
          <div key={index} className={`my-2 p-2 rounded-lg ${message.type === 'user' ? 'border-2 border-purple-700 text-black text-right' : 'border-2 text-black'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className='flex-shrink-0 p-2 border-t border-purple-700'>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Ask me anything...' className='w-full text-black p-2 border border-purple-700 rounded-lg' />
        <button onClick={handleSend} className='w-full mt-2 p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700'>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

