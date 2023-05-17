import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ChevronTop from "../components/icon/ChevronTop";
import Close from "../components/icon/Close";
import useCurrentUser from "../hooks/useCurrentUser";

function UserProfile() {
  const { currentUser } = useCurrentUser();
  const [userDetail, setUserDetail] = useState({ ...currentUser });
  const [img, setImg] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    if (currentUser) {
      axios
        .get(`/api/users/${currentUser._id}`)
        .then((res) => {
          console.log("Data:", res.data);
          setUserDetail(res.data);
        })
        .catch((e) => {
          console.log("alda gralaa", e);
        });
    }
  }, [currentUser]);
  const save = () => {
    axios
      .put(`/api/users/${currentUser._id}`, userDetail)
      .then((res) => {
        console.log(res.data);
        toast.success("🦄Амжилттай заслаа", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((e) => {
        toast.error("Засахад алдаа гарлаа!!");
        console.log("aldaa garlaa", e);
      });
  };

  const uploadImg = (e) => {
    const fd = new FormData();
    fd.append("file", e.target.files[0]);
    axios
      .post("/api/files", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImg(res.data.secure_url);
        console.log("img:", img);
        setUserDetail({ ...userDetail, imageUrl: res.data.secure_url });
      });
  };
  const handleEditButtonClick = () => {
    setIsEditMode(!isEditMode);
  };
  return (
    <div className="py-10  bg-gray-100 ">
      <div className="mx-auto">
        <div className="bg-white max-w-xl mx-auto rounded-xl   shadow-lg p-8 ">
          <h2 className="font-semibold text-center text-xl text-gray-600">
            User settings
          </h2>
          <div className="grid gap-4 gap-y-2 text-sm my-5 ">
            <div>
              <div className="grid gap-5   ">
                {/* Profile picture */}
                <div className="flex justify-center">
                  <div className="w-40 h-40 border-2 overflow-hidden rounded-full relative">
                    <img
                      src={userDetail.imageUrl}
                      alt="url"
                      className="w-full h-full object-cover"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAAMFBMVEXk5ueutLfp6+ymrbCrsbTBxsjT1tjX2tzGyszJzc/a3d6yuLu4vcC7wMPf4eLO0tRx/FlkAAAC+ElEQVR4nO2a0ZKrIAyGIQKCKL7/2y5tbbfbVk2oicws/8XZPTN78c1PEkOCUk1NTU1NTU1NTU1NTU1N/0Vw/wmbf8YvUH2w05g1+Xk4EQeGeeyMMfqq/IuZnDoFB5LVC8ZDxkR/Ckn3SrLgBGmU8ObJL00cRFnsKsmVJshFTVo3ZYGZpFCGbRBJmLSPkmFGEZSd85F0ZkShSAQwbGfQHxjHzOLQKBmGFwXwJJnFc54SeIItGaZnZEmRgpJzic8YCCRbeI2hkWQWy4ZCSaIFho0FX1seLDMXC5Ukiyt6h47OEhMLCrG43MSUSYD9Kv5hYQoYWqFbWCxLwAwlLHrkYSlB0ZqFpS8I3XxIFbF0jeWjmM6oBIWJpaY8IjZ1i3jqS011t6bvUdF3WjN1vBX1L1X1dVX1uzXdA2q6H9HvjYwTzYru01RjOG3JMBRjeOcvxMaBlYQ2r+OcBN1UzxxTYVsHxtLyJFR/Z5h6qFchhvAyrlxh4t6eRAxF1bQ/yqnt1q0xbP3TGsz6vpGtZdmgUT4a8woyzufsqEG56bqX1vd/bX/OfnrB6Wdvpyzr3Zl7+xvNk06lUIObg/fWWu/D7Pok/8ICVMpHM+muuzxneFL+f7TBJbGoSc7HqF9T6CmXTIx2Zq8xAEMYzefC8pbd1nEeWArrdnw0iCvHIRcT6l0tu3P8qw9QYe/bvIpjhyO9gRQIZ/NGo+1xdxOYCz158uaYuNlqDwg0R8RNog86PtOM34YNOHLurNN8+azrIFMWmK+sGY9EuWRUXwgDZUP3TXVlXXkOFQYVzR6gbC3CAQP0OSEWhjyVZ4iVBwyx7KHerRXD0O4tResZvAhTIpi4guUuvDGuYAlBEj5+yxZoNBjk2zvCeLBcEccyCKAgRzT8gXuDwdiSuAN3YUEYIxItFyGmVwJJdBNiLD4L2YJY6MAkhIKIXpCyBXFITB3UR5adrgrEwiVr73V60TuBQu0925cLXb27d4udoHaqHUhqx5empqampqYz9AOGsSRnmF9oWgAAAABJRU5ErkJggg==";
                      }}
                    />
                    <input
                      disabled={!isEditMode}
                      type="file"
                      name="file"
                      className="absolute left-0 right-0 top-0 bottom-0 opacity-0 cursor-pointer"
                      onChange={uploadImg}
                    />
                  </div>
                </div>
                {/* Full name  */}
                <div>
                  <label for="full_name">Full Name</label>
                  <input
                    disabled={!isEditMode}
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="New name"
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, name: e.target.value })
                    }
                    value={userDetail.name}
                  />
                </div>
                {/* email */}
                <div>
                  <label for="email">Email Address</label>
                  <input
                    disabled={!isEditMode}
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={userDetail.email}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, email: e.target.value })
                    }
                    placeholder="name@email.com"
                  />
                </div>
                {/* Phone number */}
                <div>
                  <label for="email">Phone Number</label>
                  <input
                    disabled={!isEditMode}
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={userDetail.phone}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, phone: e.target.value })
                    }
                    placeholder="Your Phone number"
                  />
                </div>
                {/* country */}
                <div>
                  <label for="country">Country / region</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      disabled={!isEditMode}
                      value={userDetail.country}
                      placeholder="Your country"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      onChange={(e) =>
                        setUserDetail({
                          ...userDetail,
                          country: e.target.value,
                        })
                      }
                    />
                    <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <Close />
                    </button>
                    <button
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <ChevronTop />
                    </button>
                  </div>
                </div>
                {/* city */}
                <div>
                  <label for="city">City</label>
                  <input
                    disabled={!isEditMode}
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={userDetail.city}
                    onChange={(e) =>
                      setUserDetail({ ...userDetail, city: e.target.value })
                    }
                    placeholder="Your city"
                  />
                </div>
                {/* state */}
                <div>
                  <label for="state">State / province</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      disabled={!isEditMode}
                      placeholder="Your state"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value={userDetail.state}
                      onChange={(e) =>
                        setUserDetail({
                          ...userDetail,
                          state: e.target.value,
                        })
                      }
                    />
                    <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                      <Close />
                    </button>
                    <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                      <ChevronTop />
                    </button>
                  </div>
                </div>
                {/* address */}
                <div>
                  <label for="address">Address / Street</label>
                  <input
                    disabled={!isEditMode}
                    type="text"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={userDetail.address}
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        address: e.target.value,
                      })
                    }
                    placeholder="Your address"
                  />
                </div>

                {/* password */}
                <div>
                  <label for="password">Password</label>
                  <input
                    disabled={!isEditMode}
                    type="Password"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e) =>
                      setUserDetail({
                        ...userDetail,
                        password: e.target.value,
                      })
                    }
                    placeholder="********"
                  />
                </div>
                {/*  edit and save button */}
                <div>
                  <div className="flex justify-between ">
                    <button
                      onClick={handleEditButtonClick}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {isEditMode ? "Disable Edit" : "Enable Edit"}
                    </button>
                    <button
                      className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => save()}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
