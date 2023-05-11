import axios from "axios";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import useCurrentUser from "../../hooks/useCurrentUser";

function Profile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { signOut, currentUser } = useCurrentUser();
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className=" relative items-center ">
      <FaUserAlt fill="#ffa500" size="20" onClick={toggleProfile} />

      <div
        className={`z-50 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
          isProfileOpen ? "" : "hidden"
        }`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className=" inline-block text-amber-500 text-sm text-gray-900 dark:text-white">
            {currentUser.name}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {currentUser.email}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Settings
            </button>
          </li>
          <li>
            <button
              onClick={signOut}
              className="block w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
