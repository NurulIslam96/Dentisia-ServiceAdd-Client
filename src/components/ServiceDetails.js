import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import reviewBanner from "../assets/review-banner.png";
import { AuthContext } from "../contexts/AuthProvider";
import Spinner from "./Spinner";

const ServiceDetails = () => {
  const [reviews, setReviews] = useState();
  const [refresh, setRefresh] = useState(false);
  const [spin, setSpin] = useState(true);
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, name, price, description, thumbnail } = service;

  useEffect(() => {
    fetch(`https://dentisia-server-side.vercel.app/reviews?serviceId=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
    setSpin(false);
  }, [_id, refresh]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const username = user.displayName;
    const photoURL = user.photoURL;
    const serviceImg = service.thumbnail;
    const email = user.email;
    const serviceId = service._id;
    fetch(`https://dentisia-server-side.vercel.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        serviceId,
        email,
        serviceImg,
        username,
        photoURL,
        message,
        name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thanks for your Review");
          setRefresh(!refresh);
          form.reset();
        }
      });
  };

  return (
    <section className="">
      <Helmet>
        <title>Service Details</title>
      </Helmet>
      {spin ? (
        <Spinner className="container mx-auto flex justify-center items-center md:h-96 h-32"></Spinner>
      ) : (
        <div
          data-aos="fade-left"
          className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">
              Service Details
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-700">
              Here is the details of Service you're gonna get!
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {name}
              </h3>
              <p className="mt-3 text-lg text-gray-700">{description}</p>
              <button className="px-8 py-3 font-bold text-2xl border-2  mt-5 rounded border-blue-500">
                Price: ${price}
              </button>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <PhotoProvider>
                <PhotoView key={thumbnail} src={thumbnail}>
                  <img
                    src={thumbnail}
                    className="mx-auto md:w-60 w-full rounded-lg shadow-lg bg-gray-500"
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
          {/* Add Review Section */}
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              {user?.email ? (
                <>
                  <div className="flex flex-col max-w-lg p-8 shadow-sm rounded-xl mx-auto mb-5 lg:p-12 bg-gray-800 text-gray-100">
                    <div className="flex flex-col items-center w-full">
                      <h2 className="text-3xl font-semibold text-center">
                        Your opinion matters!
                      </h2>
                      <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">
                          How was your experience?
                        </span>
                        <div className="flex space-x-3">
                          <button
                            type="button"
                            title="Rate 1 stars"
                            aria-label="Rate 1 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-10 h-10 hover:text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            title="Rate 2 stars"
                            aria-label="Rate 2 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-10 h-10 hover:text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            title="Rate 3 stars"
                            aria-label="Rate 3 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-10 h-10 hover:text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            title="Rate 4 stars"
                            aria-label="Rate 4 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-10 h-10 hover:text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            title="Rate 5 stars"
                            aria-label="Rate 5 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-10 h-10 hover:text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <form
                        onSubmit={handleSubmitReview}
                        className="flex flex-col w-full"
                      >
                        <input
                          type="textarea"
                          row="10"
                          placeholder="Message..."
                          className="p-4 rounded-md resize-none text-gray-800 bg-gray-200"
                          name="message"
                          required
                        />
                        <input
                          className="py-4 my-8 font-semibold rounded-md cursor-pointer text-gray-900 bg-violet-400"
                          value={"Leave Feedback"}
                          type="submit"
                        />
                      </form>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col max-w-lg p-8 shadow-sm rounded-xl mx-auto mb-5 lg:p-12 bg-gray-800 text-gray-100">
                    <div className="flex flex-col items-center w-full">
                      <h2 className="text-3xl font-semibold text-center">
                        Your opinion matters!
                      </h2>
                      <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">
                          Please Login to Add a Review
                        </span>
                      </div>
                      <form
                        onSubmit={handleSubmitReview}
                        className="flex flex-col w-full"
                      >
                        <Link
                          className="py-4 my-8 font-semibold rounded-md cursor-pointer text-gray-900 text-center bg-violet-400"
                          to={"/login"}
                        >
                          Please Login
                        </Link>
                      </form>
                    </div>
                  </div>
                </>
              )}
              {/* Previous Review Section Start */}
              {reviews?.map((review) => (
                <div data-aos="fade-up" key={review._id} review={review}>
                  <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-800 text-gray-100 mb-5">
                    <div className="flex justify-between p-4">
                      <div className="flex space-x-4">
                        <div>
                          <img
                            src={review.photoURL}
                            alt=""
                            className="object-cover w-12 h-12 rounded-full bg-gray-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{review.username}</h4>
                          <span className="text-xs text-gray-400">
                            {review.timestamp}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.5</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm text-gray-400">
                      <p>{review.message}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Previous Review Section end */}
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 md:block hidden lg:row-start-1">
              <PhotoProvider>
                <PhotoView key={reviewBanner} src={reviewBanner}>
                  <img
                    src={reviewBanner}
                    alt=""
                    className="mx-auto rounded-lg shadow-lg bg-gray-500"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceDetails;
