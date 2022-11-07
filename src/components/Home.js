import React from "react";
import banner from "../assets/Banner.jpg";

const Home = () => {
  return (
    <div
      className="w-full  bg-center md:h-[47rem] h-[32rem]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white uppercase lg:text-5xl">
            Examine your <span className="text-blue-400 underline">Teeth</span>
          </h1>
          <button className="w-full px-4 py-2 mt-4 text-xl font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
