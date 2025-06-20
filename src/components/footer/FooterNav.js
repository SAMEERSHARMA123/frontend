import React from "react";
import { FaHome, FaPlus, FaHeart, FaCommentDots } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const FooterNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isChatPage = location.pathname === '/chat';

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center z-50">
      <footer className="w-[400px] max-w-[90%] bg-white/30 backdrop-blur-md rounded-full px-8 py-4 flex justify-between items-center shadow-lg border border-white/20">
        <button 
          onClick={() => navigate('/')}
          className="bg-white/50 backdrop-blur-sm text-black p-3 rounded-full shadow hover:bg-purple-600 hover:text-white active:bg-purple-700 active:text-white transition-all duration-200"
        >
          <FaHome className="text-xl" />
        </button>
        <button className="bg-white/50 backdrop-blur-sm text-black p-3 rounded-full shadow hover:bg-purple-600 hover:text-white active:bg-purple-700 active:text-white transition-all duration-200">
          <MdVideoLibrary className="text-xl" />
        </button>
        <button className="bg-white/50 backdrop-blur-sm text-black p-3 rounded-full shadow hover:bg-purple-600 hover:text-white active:bg-purple-700 active:text-white transition-all duration-200">
          <FaPlus className="text-2xl" />
        </button>
        <button className="bg-white/50 backdrop-blur-sm text-black p-3 rounded-full shadow hover:bg-purple-600 hover:text-white active:bg-purple-700 active:text-white transition-all duration-200">
          <FaHeart className="text-xl" />
        </button>
        <button 
          onClick={() => navigate('/chat')}
          className={`bg-white/50 backdrop-blur-sm p-3 rounded-full shadow hover:bg-purple-600 hover:text-white active:bg-purple-700 active:text-white transition-all duration-200 ${isChatPage ? 'bg-purple-600 text-white' : 'text-black'}`}
        >
          <FaCommentDots className="text-xl" />
        </button>
      </footer>
    </div>
  );
};

export default FooterNav; 