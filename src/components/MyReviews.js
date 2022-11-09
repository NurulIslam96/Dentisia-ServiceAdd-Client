import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`,{
      headers: {
        authorization:`Bearer ${localStorage.getItem('dent-token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          return logOut();
        }
        return res.json();
      })
      .then(data => setMyReviews(data));
  }, [user, refresh, logOut]);

  const handleDeleteReview = (id, name) => {
    fetch(`http://localhost:5000/myreviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Deleted Review from ${name}`);
          setRefresh(!refresh);
        }
      });
  };
  const handleEditReview = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    fetch(`http://localhost:5000/editreview/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success("Successfully edited your Review");
          setRefresh(!refresh);
          form.reset();
        } else {
          toast.error("Update Failed");
        }
      });
  };

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div>
      <Helmet>
        <title>My Reviews</title>
      </Helmet>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-800 container mx-auto my-5 rounded-md text-gray-100">
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
                      src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
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
                          <form
                            onSubmit={(e) => handleEditReview(e, review._id)}
                            className="flex md:flex-row flex-col"
                          >
                            <textarea
                              className="w-full text-black md:rounded-l-md p-4"
                              placeholder="Edit Review"
                              name="message"
                              rows="1"
                              required
                            ></textarea>
                            <input
                              type="submit"
                              value={"Submit"}
                              className="px-2 py-3 md:rounded-r-md bg-blue-500"
                            />
                          </form>
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
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 space-x-1"
                        >
                          <FaRegEdit></FaRegEdit>
                          <span onClick={handleHidden}>Edit</span>
                        </button>
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
