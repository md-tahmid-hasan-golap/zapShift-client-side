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
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}{" "}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <button
            onClick={handelLogout}
            className="
                btn btn-sm md:btn-md 
                bg-red-500 hover:bg-red-600 
                border-none text-white 
                normal-case px-4 md:px-6
              "
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end gap-2">
          <Link to="/login" className="btn btn-outline">
            Sign In
          </Link>
          <Link
            to="/beARider"
            className="
    /* Background and Text Color */
    bg-[#D9F99D] 
    hover:bg-[#bef264] 
    text-black 
    
    /* Typography */
    font-semibold 
    normal-case 
    
    /* Padding & Shape */
    px-6 
    py-2 
    rounded-xl 
    
    /* Layout & Transition */
    btn 
    border-none 
    transition-all 
    duration-300
  "
          >
            Be a rider
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
