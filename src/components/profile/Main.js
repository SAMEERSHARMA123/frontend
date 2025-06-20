import React, { useState, useRef, useLayoutEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import UserInfo from "./UserInfo";
import Tabs from "./Tabs";
import PhotoGrid from "./PhotoGrid";
import ShortsGrid from "./ShortsGrid";
import { MdVideoLibrary } from 'react-icons/md';

const profile = {
  name: "Katty Abrohams",
  avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=800&q=80",
  bio: "Embracing the mountain air \uD83C\uDFD4\uFE0F\nContent creator \uD83D\uDCF8",
  stats: {
    followers: "567 K",
    following: "1,655",
    posts: "166",
  },
};

const photos = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=3840&q=80",
  "https://imgs.search.brave.com/XkZFs_rRE_OPgqSlsPsZJH1isPFpWDBQ1i-a00NQRzw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTE0NjY0MjQ5MzYt/ZTMwNDkxOWFhZGE3/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1USjhmRGhy/SlRJd2QyRnNiSEJo/Y0dWeWZHVnVmREI4/ZkRCOGZId3c.jpeg",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=3840&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=3840&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=3840&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=3840&q=80",
  "https://imgs.search.brave.com/8oUeQ_Qy1TZsa4Xz1InybM9dN-1MQdD_8Gm1Mw9vpp8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE3/Mzg1OTc0NTI5ODIt/NTc1OWRhNzRmNjhk/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeGpiMnhz/WldOMGFXOXVMWEJo/WjJWOE1Yd3lOVGMy/T1RrMGZIeGxibnd3/Zkh4OGZIdz0.jpeg",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=3840&q=80",
];

const shortsVideos = [
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b5e00f447af?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b5e00f447af?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b5e00f447af?auto=format&fit=crop&w=800&q=80",
];

export default function Main() {
  const [activeTab, setActiveTab] = useState(0); // 0: Feeds, 1: Shorts, 2: Tag
  const tabRefs = [useRef(null), useRef(null), useRef(null)];
  const [underline, setUnderline] = useState(null);
  const [isFollowed, setIsFollowed] = useState(false);

  useLayoutEffect(() => {
    const node = tabRefs[activeTab].current;
    if (node) {
      setUnderline({ left: node.offsetLeft, width: node.offsetWidth });
    }
  }, [activeTab]);

  // Set initial underline position for Feeds tab
  useLayoutEffect(() => {
    const node = tabRefs[0].current;
    if (node && !underline) {
      setUnderline({ left: node.offsetLeft, width: node.offsetWidth });
    }
  }, [underline]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center w-full text-xs sm:text-sm md:text-base overflow-x-hidden">
      <ProfileHeader profile={profile} />
      <div className="h-8 xs:h-10 sm:h-14" />
      <UserInfo profile={profile} isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabRefs={tabRefs} />
      <div className="w-full max-w-md px-1 xs:px-2 sm:px-4 py-2 xs:py-4 sm:py-6">
        {activeTab === 0 ? (
          <PhotoGrid photos={photos} />
        ) : activeTab === 1 ? (
          <ShortsGrid shortsVideos={shortsVideos} />
        ) : (
          <PhotoGrid photos={photos} />
        )}
      </div>
    </div>
  );
}
