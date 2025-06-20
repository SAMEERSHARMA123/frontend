import React from 'react';
import ChatSection from '../components/chatSection/ChatSection';
import Navbar from '../components/navbar/Navbar';
import FooterNav from '../components/footer/FooterNav';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto">
          <ChatSection />
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default ChatPage; 