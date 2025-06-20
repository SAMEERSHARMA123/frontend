import React from 'react';
import { FaCamera } from 'react-icons/fa';

export default function ProfileHeader({ profile }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl relative px-4 md:px-0 md:pr-16">
        <div className="flex justify-center relative">
          <img
            src={profile.cover}
            alt="cover"
            className="w-full h-32 xs:h-36 sm:h-40 md:h-44 object-cover rounded-b-3xl"
          />
          <div className="absolute left-1/2 -bottom-16 xs:-bottom-18 sm:-bottom-20 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
              <img
                src={profile.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Plus Icon attached just below avatar */}
            <div className="-mt-6 xs:-mt-7 sm:-mt-8 flex items-center justify-center">
              <div className="bg-purple-600 rounded-full flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 shadow-lg border-2 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="white"
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 5v10m5-5H5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  