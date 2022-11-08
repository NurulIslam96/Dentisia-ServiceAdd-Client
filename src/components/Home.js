import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import banner from "../assets/Banner.jpg";
import bannerfront from '../assets/banner-dentist.png'

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <div
        className="w-full flex justify-end bg-center md:h-[47rem] h-[32rem]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <img src={bannerfront}  className="w-96 place-self-end absolute " alt="" />
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center z-50">
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
      <div className="text-center flex justify-center mt-10 text-2xl font-bold">
        <h1 className="bg-slate-100 border-b-2 cursor-default border-blue-700 text-blue-700 text-center py-2 px-4 rounded">
          Check Services
        </h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 container mx-auto my-10">
        {services?.map((service) => (
          <div
            key={service._id}
            className="flex items-center justify-center mx-2"
          >
            <div className="md:max-w-xs overflow-hidden bg-white rounded-lg shadow-lg my-5 dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                  {service.name}
                </h1>
                <h1 className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {service.description.length > 100 ? (
                    <p>{service.description.slice(0, 100) + "..."}</p>
                  ) : (
                    service.description
                  )}
                </h1>
              </div>
              <img
                className="object-cover bg-white w-full h-48 mt-2"
                src={service.thumbnail}
                alt="serviceImage"
              />

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">
                  ${service.price}
                </h1>
                <Link
                  className="px-2 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
                  to={`/services/${service._id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link className="border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-800 text-lg cursor-pointer hover:bg-gray-800 hover:text-gray-200"
        to={'/services'}
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Home;
