import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { User } from "lucide-react";
import axios from "axios";

const Register = () => {
  const { creatUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    // data context e email, password ebong name thakbe
    console.log(data.photo[0]);
    const profileImage = data.photo[0];
    creatUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        // update User profile here
        const formData = new FormData();
        formData.append("image", profileImage);
        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;
        axios.post(imageApiUrl, formData).then((res) => {
          console.log("ufter image upload", res.data.data.url);
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user Profile updated Done");
            })
            .catch((error) => {
              console.log(error);
            });
        });
        toast.success("Account created successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message || "Registration failed!");
      });
  };

  const handelSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        toast.success("Signed in with Google!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google sign in failed!");
      });
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left mb-6">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit(handelRegister)}>
        <fieldset className="fieldset space-y-4">
          {/* Name Field */}
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          {/* image  Field */}
          <div>
            <label className="label mb-2">Upload Your Image</label>
            <input
              type="file"
              {...register("photo", { required: "photo is required" })}
              className="file-input input-bordered w-full"
              placeholder="Upload Your Image"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="btn btn-neutral w-full mt-2">Register</button>
        </fieldset>
      </form>

      <div className="divider">OR</div>

      <button
        onClick={handelSignInWithGoogle}
        className="btn btn-outline w-full"
      >
        <FcGoogle size={25} />
        Sign In With Google
      </button>

      <p className="text-center font-medium pt-4 text-sm sm:text-base">
        Already Have An Account?{" "}
        <Link className="text-blue-500 underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
