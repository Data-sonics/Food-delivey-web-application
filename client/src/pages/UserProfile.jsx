import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import ChevronTop from "../components/icon/ChevronTop";
import Close from "../components/icon/Close";
import useCurrentUser from "../hooks/useCurrentUser";

function UserProfile() {
  const { currentUser } = useCurrentUser();
  const [userDetail, setUserDetail] = useState({ ...currentUser });
  useEffect(() => {
    axios
      .get(`/api/users/${currentUser._id}`)
      .then((res) => {
        console.log("Data:", res.data);
        setUserDetail(res.data);
      })
      .catch((error) => {
        console.log("alda gralaa");
      });
  }, [currentUser]);
  const save = () => {
    axios
      .put(`/api/users/${currentUser._id}`, userDetail)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log("aldaa garlaa", e);
      });
  };
  return (
    <div className="py-10  bg-gray-100 ">
      <div className="   mx-auto">
        <div>
          <div className=" text-center my-5">
            <h2 className="font-semibold text-xl text-gray-600">
              User settings
            </h2>
          </div>

          <div className="bg-white max-w-xl mx-auto rounded-xl   shadow-lg p-8 ">
            <div className="grid gap-4 gap-y-2 text-sm ">
              <div>
                <div className="grid gap-5  text-sm  ">
                  <div>
                    <label for="full_name">Full Name</label>
                    <input
                      type="text"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="New name"
                      onChange={(e) =>
                        setUserDetail({ ...userDetail, name: e.target.value })
                      }
                      value={userDetail.name}
                    />
                  </div>

                  <div>
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={userDetail.email}
                      onChange={(e) =>
                        setUserDetail({ ...userDetail, email: e.target.value })
                      }
                      placeholder="name@email.com"
                    />
                  </div>

                  <div>
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label for="city">City</label>
                    <input
                      type="text"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label for="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        placeholder="Country"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
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

                  <div>
                    <label for="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type=""
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
                      />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <Close />
                      </button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <ChevronTop />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label for="password">Password</label>
                    <input
                      type="Password"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={userDetail.password}
                      onChange={(e) =>
                        setUserDetail({
                          ...userDetail,
                          password: e.target.value,
                        })
                      }
                      placeholder="********"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between ">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
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
    </div>
  );
}

export default UserProfile;
