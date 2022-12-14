import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import dentist from "../assets/dentist.jpg";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [spin, setSpin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (spin) {
      setTimeout(() => {
        setSpin(false);
      }, 400);
    }
  }, [spin]);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://dentisia-server-side.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("dent-token", data.token);
            toast.success("Login Successful");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.log(err.message));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        form.reset();
        setError("");
        fetch("https://dentisia-server-side.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("dent-token", data.token);
            toast.success("Login Successful");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {spin ? (
        <div className="container mx-auto flex justify-center items-center md:h-96 h-32"><Spinner></Spinner></div>
      ) : (
        <div className="flex items-center min-h-screen">
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-slate-800 rounded-lg shadow-lg lg:max-w-4xl">
            <div
              className="hidden bg-cover lg:block lg:w-1/2"
              style={{
                backgroundImage: `url(${dentist})`,
              }}
            ></div>
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <h2 className="text-2xl font-semibold text-center text-white">
                Dentisia
              </h2>
              <p className="text-sm text-center text-gray-200">Welcome back!</p>
              <Link
                href="#"
                className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 text-gray-200 hover:bg-gray-500 hover:text-dark"
                onClick={handleGoogleSignIn}
              >
                <div className="px-4 py-2">
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <span className="w-5/6 px-4 py-3 font-bold text-center">
                  Sign in with Google
                </span>
              </Link>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                <p className="text-xs text-center uppercase text-gray-400">
                  or login with email
                </p>
                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-200">
                    Email Address
                  </label>
                  <input
                    id="LoggingEmailAddress"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-gray-200">
                      Password
                    </label>
                    <Link
                      href="#"
                      className="text-xs text-gray-300 hover:underline"
                    >
                      Forget Password?
                    </Link>
                  </div>
                  <input
                    className="block w-full mb-4 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="password"
                    placeholder="password"
                    name="password"
                  />
                  <span className="text-red-500 font-bold">{error}</span>
                  <input
                    className="mt-8 w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600 cursor-pointer font-semibold"
                    type="submit"
                    value="LOGIN"
                  />
                </div>
              </form>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                <Link
                  to={"/signup"}
                  className="text-xs uppercase text-gray-400 hover:underline"
                >
                  or sign up
                </Link>
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
