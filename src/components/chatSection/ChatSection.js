import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatOptions from './ChatOptions';
import { useChat } from '../../context/ChatContext';

const ChatSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { isAnimating } = useChat();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={`chat-section h-[calc(100vh-4rem)] flex flex-col transform transition-all duration-300 ease-in-out ${
      isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
    }`}>
      <div className="chat-content flex flex-col h-full">
        <div className="flex-none">
          <ChatOptions activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatList activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ChatSection; 