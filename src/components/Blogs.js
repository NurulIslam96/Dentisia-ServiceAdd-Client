import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="my-5">
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className="text-gray-100 mb-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Nov 9, 2022</span>
            <Link
              rel="noopener noreferrer"
              href="#"
              alt=""
              className="px-2 py-1 font-bold rounded bg-violet-400 dark:text-gray-900"
            >
              SQL and NoSQL
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Difference between SQL and NoSQL
            </Link>
            <p className="mt-2">
            Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-400"
            >
              Read more
            </Link>
            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-400">
                  Nurul Islam
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-100 mb-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Nov 9, 2022</span>
            <Link
              rel="noopener noreferrer"
              href="#"
              alt=""
              className="px-2 py-1 font-bold rounded bg-violet-400 dark:text-gray-900"
            >
              JsonWebToken
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is JWT, and how does it work?
            </Link>
            <p className="mt-2">
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-400"
            >
              Read more
            </Link>
            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-400">
                  Nurul Islam
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-100 mb-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Nov 9, 2022</span>
            <Link
              rel="noopener noreferrer"
              href="#"
              alt=""
              className="px-2 py-1 font-bold rounded bg-violet-400 dark:text-gray-900"
            >
              JS and NodeJS
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is the difference between javascript and NodeJS?
            </Link>
            <p className="mt-2">
            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-400"
            >
              Read more
            </Link>
            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-400">
                  Nurul Islam
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-100 mb-5">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Nov 9, 2022</span>
            <Link
              rel="noopener noreferrer"
              href="#"
              alt=""
              className="px-2 py-1 font-bold rounded bg-violet-400 dark:text-gray-900"
            >
              NodeJS MultiReq
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              How does NodeJS handle multiple requests at the same time
            </Link>
            <p className="mt-2">
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-400"
            >
              Read more
            </Link>
            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-400">
                  Nurul Islam
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
