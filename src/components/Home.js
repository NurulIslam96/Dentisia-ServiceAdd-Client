import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import banner from "../assets/Banner.jpg";
import bannerfront from "../assets/banner-dentist.png";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Dentisia</title>
      </Helmet>
      <div
        className="w-full flex justify-end bg-center md:h-[47rem] h-[32rem]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <img
          src={bannerfront}
          className="md:w-96 w-80 place-self-end absolute "
          alt=""
        />
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center z-20">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-5xl">
              Hi! <span className="text-blue-400 underline">I</span> am Here to{" "}
              <br />
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
            data-aos="fade-up"
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
        <Link
          className="border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-800 text-lg cursor-pointer hover:bg-gray-800 hover:text-gray-200"
          to={"/services"}
        >
          View All
        </Link>
      </div>
      <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
	<div data-aos="fade-right" className="container grid grid-cols-1 gap-6 mx-auto md:mt-36 sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
					<polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
					<path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
					<path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">15</p>
				<p className="capitalize">Equipments</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x- bg-gray-900 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
					<path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
					<path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
					<polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
					<polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">110</p>
				<p className="capitalize">New Patients</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
					<path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
					<rect width="32" height="32" x="80" y="264"></rect>
					<rect width="32" height="32" x="240" y="128"></rect>
					<rect width="32" height="32" x="136" y="168"></rect>
					<rect width="32" height="32" x="400" y="264"></rect>
					<path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">172%</p>
				<p className="capitalize">Growth</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
					<path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">17%</p>
				<p className="capitalize">Bounce rate</p>
			</div>
		</div>
	</div>
</section>
      <div
        className="w-full mt-24 dark:bg-gray-500"
        style={{
          backgroundImage: "url('https://www.afamilydentalcarecenter.com/wp-content/uploads/2019/02/DentalOfficeBackground.png')",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">
            Get My Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
