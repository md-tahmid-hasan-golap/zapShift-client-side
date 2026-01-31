import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import AuthImg from "../../src/assets/banner/authImage.png";

const AuthLayouts = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Logo */}
      <div className="mt-6 md:mt-10">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-8">
        {/* Form / Outlet */}
        <div className="w-full md:w-1/2 shadow-lg p-4 rounded-lg">
          <Outlet />
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img src={AuthImg} alt="Auth" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
