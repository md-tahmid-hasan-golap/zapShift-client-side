import React, { useContext } from "react";
import Logo from "../../../Components/Logo/Logo";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../firebase/FirebaseAuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Successfully logged out!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout failed!");
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl p-0 md:p-2">
          <Logo />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
      </div>

      {/* Right Side Section */}
      <div className="navbar-end gap-2 md:gap-3">
        {/* Login ba Logout button (Left side of 'Be a rider') */}
        {user ? (
          <button
            onClick={handelLogout}
            className="btn btn-sm md:btn-md bg-red-500 hover:bg-red-600 border-none text-white normal-case px-3 md:px-5 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm md:btn-md btn-outline border-gray-300 normal-case"
          >
            Sign In
          </Link>
        )}

        {/* 'Be a rider' - Ekebare Right Side-e thakbe */}
        <Link
          to="/beARider"
          className="
            btn btn-sm md:btn-md
            bg-[#D9F99D] 
            hover:bg-[#bef264] 
            text-black 
            font-bold 
            normal-case 
            px-3 md:px-6 
            rounded-xl 
            border-none 
            transition-all 
            duration-300
            shadow-sm
          "
        >
          Be a rider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
