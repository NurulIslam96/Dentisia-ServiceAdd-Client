import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FaRegEdit } from "react-icons/fa";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://dentisia-server-side.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("dent-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setMyReviews(data));
  }, [user, refresh, logOut]);

  const handleDeleteReview = (id, name) => {
    const confirm = window.confirm("Do You Want to delete this Review");
    if (confirm) {
      fetch(`https://dentisia-server-side.vercel.app/myreviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`Deleted Review from ${name}`);
            setRefresh(!refresh);
          }
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>My Reviews</title>
      </Helmet>
      <div
        data-aos="fade-left"
        className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-800 container mx-auto my-5 rounded-md text-gray-100"
      >
        <h2 className="text-xl font-semibold">My Reviews</h2>
        {/* My Reviews Section */}
        {myReviews?.length > 0 ? (
          <div>
            {myReviews?.map((review) => (
              <ul
                key={review._id}
                review={review}
                className="flex flex-col divide-y divide-gray-700"
              >
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                      src={review.serviceImg}
                      alt="Polaroid camera"
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                            {review.name}
                          </h3>
                          <p className="text-sm dark:text-gray-400">
                            {review.message}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            {review.timestamp.slice(0, 10)}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-sm divide-x">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                          onClick={() =>
                            handleDeleteReview(review._id, review.name)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current"
                          >
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect
                              width="32"
                              height="200"
                              x="168"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="240"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="312"
                              y="216"
                            ></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                          </svg>
                          <span>Delete</span>
                        </button>
                        <div className="flex items-center">
                          <Link to={`/editreviews/${review._id}`}>
                          <div className="flex items-center pl-2">
                          <FaRegEdit></FaRegEdit>
                          <p className="pl-1">Edit</p>
                          </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-5xl text-white">No Reviews Yet</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
