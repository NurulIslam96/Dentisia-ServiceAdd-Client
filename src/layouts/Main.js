import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="bg-sky-100 flex flex-col justify-between min-h-screen overflow-x-hidden">
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
