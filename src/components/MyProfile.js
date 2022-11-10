import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const MyProfile = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="container mx-auto flex items-center justify-center md:my-32 my-10">
        <div class="mx-2">
      <div class="border-b-2 block md:flex">
        <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div class="flex justify-between">
            <span class="text-xl font-semibold block">{user.displayName}</span>
            <Link
              href="#"
              class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
            >
              Edit
            </Link>
          </div>

          <span class="text-gray-600">
            Born to be a Developer
          </span>
          <div class="w-full p-8 mx-2 flex justify-center">
            <img
              id="showImage"
              class="w-full md:w-32 items-center border"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>

        <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
          <div class="rounded  shadow p-6">
            <div class="pb-6">
              <label for="name" class="font-semibold text-gray-700 block pb-1">
                Name
              </label>
              <div class="flex">
                <input
                  disabled
                  id="username"
                  class="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  value={user?.displayName}
                />
              </div>
            </div>
            <div class="pb-4">
              <label for="about" class="font-semibold text-gray-700 block pb-1">
                Email
              </label>
              <input
                disabled
                id="email"
                class="border-1  rounded-r px-4 py-2 w-full"
                type="email"
                value={user?.email}
              />
              <span class="text-gray-600 pt-4 block opacity-70">
                Personal login information of your account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default MyProfile;
