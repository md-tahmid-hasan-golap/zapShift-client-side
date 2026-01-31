import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
        Create an Account
      </h2>
      <form onSubmit={handleSubmit(handelRegister)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm">
              Password must be at least 6 characters
            </p>
          )}
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>

      <p className="text-center font-medium pt-3">
        Already Have An Account{" "}
        <Link className="text-blue-500 underline " to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
