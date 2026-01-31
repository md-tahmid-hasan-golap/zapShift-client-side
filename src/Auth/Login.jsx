import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handelLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left mb-6">
        Login with ZapShift
      </h2>

      <form onSubmit={handleSubmit(handelLogin)}>
        <fieldset className="fieldset space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email")}
              className="input input-bordered w-full"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password")}
              className="input input-bordered w-full"
              placeholder="Password"
            />
          </div>

          <div className="text-right">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          <button className="btn btn-neutral w-full mt-2">Login</button>
        </fieldset>
        <br />
        <button
          onClick={handelSignInWithGoogle}
          className="btn btn-outline w-full"
        >
          {" "}
          <FcGoogle size={25} /> Sign In With Google
        </button>
      </form>

      <p className="text-center font-medium pt-4 text-sm sm:text-base">
        Don’t have any account ?{" "}
        <Link className="text-blue-500 underline" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
