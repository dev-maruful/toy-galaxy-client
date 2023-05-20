import React from "react";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-463px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
};

export default Root;
