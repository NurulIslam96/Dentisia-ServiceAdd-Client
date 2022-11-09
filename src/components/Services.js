import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Services = () => {
  const [services, setServices] = useState();
  const [spin, setSpin] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data)
        setSpin(false)
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      {spin ? <div className="container mx-auto flex justify-center items-center md:h-96 h-32"><Spinner></Spinner></div> : 
      <div className="grid md:grid-cols-3 grid-cols-1 container mx-auto gap-4 my-10">
      
      {services?.map((service) => (
        <div key={service._id} className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <PhotoProvider>
              <PhotoView key={service.thumbnail} src={service.thumbnail}>
                <img
                  src={service.thumbnail}
                  className="w-full md:h-64"
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {service.name}
              </h5>
              <h1 className="text-gray-700 text-base mb-4">
                {service.description.length > 100 ? (
                  <p>{service?.description?.slice(0, 100) + "..."}</p>
                ) : (
                  service?.description
                )}
              </h1>
              <Link
                type="button"
                to={`/services/${service._id}`}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
      }
      
    </div>
  );
};

export default Services;
