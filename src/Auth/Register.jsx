import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    console.log(data);
    creatUser(data.email, data.password)
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
        Create an Account
      </h2>

      <form onSubmit={handleSubmit(handelRegister)}>
        <fieldset className="fieldset space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <button className="btn btn-neutral w-full mt-2">Register</button>
        </fieldset>
        <br />
        <button
          onClick={handelSignInWithGoogle}
          className="btn btn-outline w-full"
        >
          <FcGoogle size={25} />
          Sign In With Google
        </button>
      </form>

      <p className="text-center font-medium pt-4 text-sm sm:text-base">
        Already Have An Account{" "}
        <Link className="text-blue-500 underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
