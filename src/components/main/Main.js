import React, { useRef } from "react";
import Navbar from "../navbar/Navbar";
import StoryBar from "../storyBar/Storybar";
import FooterNav from "../footer/FooterNav";
import SocialPost from "../socialPost/SocialPost";
import CombinedLogin from "../login/CombinedLogin";

const Main = () => {
  const storyBarRef = useRef(null);

  const scrollStories = (direction) => {
    const scrollAmount = 150;
    if (storyBarRef.current) {
      storyBarRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-16 pb-20 md:ml-64"> {/* Added margin-left for sidebar on desktop */}
        <div className="max-w-4xl mx-auto px-4">
          {/* Story Bar */}
          <div className="bg-white shadow-sm mb-4 rounded-lg">
            <StoryBar storyBarRef={storyBarRef} scrollStories={scrollStories} />
          </div>

          {/* Footer */}
          <div className="mb-4">
            <FooterNav />
          </div>

          {/* Posts */}
          <div className="space-y-4">
            <SocialPost
              avatarSrc="https://i.pravatar.cc/150?img=4"
              username="Brooklyn Simmons"
              handle="@broklyn_s"
              postImageSrc="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              initialLikes={20200}
              initialComments={1400}
            />
            <SocialPost
              avatarSrc="https://i.pravatar.cc/150?img=9"
              username="John Doe"
              handle="@john_d"
              postImageSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              initialLikes={15000}
              initialComments={800}
            />
            <SocialPost
              avatarSrc="https://i.pravatar.cc/150?img=10"
              username="Jane Smith"
              handle="@jane_s"
              postImageSrc="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              initialLikes={30000}
              initialComments={2500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
