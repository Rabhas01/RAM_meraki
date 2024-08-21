import React, { useState, KeyboardEvent } from 'react';
import axios from 'axios';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ user: boolean; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
  
    // Add user message to the chat
    const userMessage = { user: true, text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
  
    // Send the user's message to the assistant
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'user', content: input },
          ],
          // Add any other parameters you need here
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Add assistant response to the chat
      const assistantResponse = response.data.choices[0].message.content;
      setMessages((prevMessages) => [...prevMessages, { user: false, text: assistantResponse }]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  
    // Clear the input field
    setInput('');
  };
  

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`fixed bottom-4 left-4 ${isOpen ? 'block' : 'hidden'} ${isMinimized ? 'w-24' : 'w-80'} bg-white border border-gray-300 rounded-lg shadow-lg`}>
      {!isMinimized && (
        <div className="relative h-80 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`my-2 ${message.user ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-4 py-2 rounded-lg ${message.user ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center p-2 border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-l-lg text-black"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="ml-2 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600"
        >
          {isMinimized ? 'Expand' : 'Minimize'}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-2 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600"
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
