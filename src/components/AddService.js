import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const thumbnail = form.imgUrl.value;
    const description = form.description.value;
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        thumbnail,
        name,
        price,
        description
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service Added Succesfully");
          form.reset()
        }
        toast.error("Failed To Add Service");
      });
  };

  return (
    <section className="md:my-20">
        <Helmet><title>Add Service</title></Helmet>
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="md:w-auto w-full"
              alt=""
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 w-full mb-12 md:mb-0">
            <h1 className="text-3xl font-bold">
              Please Add info to insert a{" "}
              <span className="text-blue-600"> Service</span>
            </h1>
            <form onSubmit={handleAddService}>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
              <div className="mb-6">
                <label className="block mb-2 text-md font-medium text-gray-600">
                  Service Name :
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Service Name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-md font-medium text-gray-600">
                  Email Id :
                </label>
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-md font-medium text-gray-600">
                  Price :
                </label>
                <input
                  type="number"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="$ Price"
                  name="price"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-md font-medium text-gray-600">
                  Service Image :
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Service Image URL"
                  name="imgUrl"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-md font-medium text-gray-600">
                  Description :
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Service Description"
                  name="description"
                  required
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    I Accept{" "}
                    <span className="underline">Terms and Conditions</span>
                  </label>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <input
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  type="submit"
                  value="Add Service"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
