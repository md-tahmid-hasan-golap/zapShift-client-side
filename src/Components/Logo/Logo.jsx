import React from "react";

import Logos from "../../assets/banner/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={Logos} alt="" />
      <h2 className="mt-6">ZapShift</h2>
    </Link>
  );
};

export default Logo;
