import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const MyProfile = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="container mx-auto flex items-center justify-center md:my-32 my-10">
        <div className="mx-2">
      <div className="border-b-2 block md:flex">
        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div className="flex justify-between">
            <span className="text-xl font-semibold block">{user.displayName}</span>
            <Link
              href="#"
              className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
            >
              Edit
            </Link>
          </div>

          <span className="text-gray-600">
            Born to be a Developer
          </span>
          <div className="w-full p-8 mx-2 flex justify-center">
            <img
              id="showImage"
              className="w-full md:w-32 items-center border"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
          <div className="rounded  shadow p-6">
            <div className="pb-6">
              <label for="name" className="font-semibold text-gray-700 block pb-1">
                Name
              </label>
              <div className="flex">
                <input
                  disabled
                  id="username"
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  value={user?.displayName}
                />
              </div>
            </div>
            <div className="pb-4">
              <label for="about" className="font-semibold text-gray-700 block pb-1">
                Email
              </label>
              <input
                disabled
                id="email"
                className="border-1  rounded-r px-4 py-2 w-full"
                type="email"
                value={user?.email}
              />
              <span className="text-gray-600 pt-4 block opacity-70">
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
