import axios from "axios";
import React, { useEffect, useState } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";

function DropDownProfile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { signOut, currentUser } = useCurrentUser();
  const [user, setUser] = useState({ ...currentUser });
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  useEffect(() => {
    if (currentUser) {
      axios
        .get(`/api/users/${currentUser._id}`)
        .then((res) => {
          console.log("drop:", res.data);
          setUser(res.data);
        })
        .catch((e) => {
          console.log("alda gralaa", e);
        });
    }
  }, [currentUser]);

  return (
    <div className=" relative items-center ">
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={toggleProfile}
      >
        <img
          className="w-10 h-10 rounded-full object-cover"
          alt="userPhoto"
          src={user.imageUrl}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAAMFBMVEXk5ueutLfp6+ymrbCrsbTBxsjT1tjX2tzGyszJzc/a3d6yuLu4vcC7wMPf4eLO0tRx/FlkAAAC+ElEQVR4nO2a0ZKrIAyGIQKCKL7/2y5tbbfbVk2oicws/8XZPTN78c1PEkOCUk1NTU1NTU1NTU1NTU1N/0Vw/wmbf8YvUH2w05g1+Xk4EQeGeeyMMfqq/IuZnDoFB5LVC8ZDxkR/Ckn3SrLgBGmU8ObJL00cRFnsKsmVJshFTVo3ZYGZpFCGbRBJmLSPkmFGEZSd85F0ZkShSAQwbGfQHxjHzOLQKBmGFwXwJJnFc54SeIItGaZnZEmRgpJzic8YCCRbeI2hkWQWy4ZCSaIFho0FX1seLDMXC5Ukiyt6h47OEhMLCrG43MSUSYD9Kv5hYQoYWqFbWCxLwAwlLHrkYSlB0ZqFpS8I3XxIFbF0jeWjmM6oBIWJpaY8IjZ1i3jqS011t6bvUdF3WjN1vBX1L1X1dVX1uzXdA2q6H9HvjYwTzYru01RjOG3JMBRjeOcvxMaBlYQ2r+OcBN1UzxxTYVsHxtLyJFR/Z5h6qFchhvAyrlxh4t6eRAxF1bQ/yqnt1q0xbP3TGsz6vpGtZdmgUT4a8woyzufsqEG56bqX1vd/bX/OfnrB6Wdvpyzr3Zl7+xvNk06lUIObg/fWWu/D7Pok/8ICVMpHM+muuzxneFL+f7TBJbGoSc7HqF9T6CmXTIx2Zq8xAEMYzefC8pbd1nEeWArrdnw0iCvHIRcT6l0tu3P8qw9QYe/bvIpjhyO9gRQIZ/NGo+1xdxOYCz158uaYuNlqDwg0R8RNog86PtOM34YNOHLurNN8+azrIFMWmK+sGY9EuWRUXwgDZUP3TXVlXXkOFQYVzR6gbC3CAQP0OSEWhjyVZ4iVBwyx7KHerRXD0O4tResZvAhTIpi4guUuvDGuYAlBEj5+yxZoNBjk2zvCeLBcEccyCKAgRzT8gXuDwdiSuAN3YUEYIxItFyGmVwJJdBNiLD4L2YJY6MAkhIKIXpCyBXFITB3UR5adrgrEwiVr73V60TuBQu0925cLXb27d4udoHaqHUhqx5empqampqYz9AOGsSRnmF9oWgAAAABJRU5ErkJggg==";
          }}
        />
      </button>

      <div
        className={`z-50 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
          isProfileOpen ? "" : "hidden"
        }`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className=" inline-block text-amber-500 text-sm  dark:text-white">
            {user.name}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {user.email}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="/userProfile"
              className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
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

export default DropDownProfile;
