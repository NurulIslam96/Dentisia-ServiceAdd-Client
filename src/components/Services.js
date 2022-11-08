import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 container mx-auto gap-4 my-10">
      {services.map((service) => (
        <div key={service._id} className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <PhotoProvider>
              <PhotoView key={service.thumbnail} src={service.thumbnail}>
              <img src={service.thumbnail} alt="" />
              </PhotoView>
            </PhotoProvider>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {service.name}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                {service.description.length > 100 ? (
                  <p>{service.description.slice(0, 100) + "..."}</p>
                ) : (
                  service.description
                )}
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
