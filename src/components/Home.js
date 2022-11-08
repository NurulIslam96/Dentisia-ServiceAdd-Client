import React from "react";
import banner from "../assets/Banner.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="w-full  bg-center md:h-[47rem] h-[32rem]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-5xl">
              Examine your{" "}
              <span className="text-blue-400 underline">Teeth</span>
            </h1>
            <button className="w-full px-4 py-2 mt-4 text-xl font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 container mx-auto">
        <div>
          <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div class="px-4 py-2">
              <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                NIKE AIR
              </h1>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quos quidem sequi illum facere recusandae voluptatibus
              </p>
            </div>
            <img
              class="object-cover w-full h-48 mt-2"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
              alt="NIKE AIR"
            />

            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 class="text-lg font-bold text-white">$129</h1>
              <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
