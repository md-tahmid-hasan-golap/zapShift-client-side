import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router.jsx";
import FirebaseAuthProvider from "./firebase/FirebaseAuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <Toaster position="top-right" reverseOrder={false} />{" "}
      <RouterProvider router={router}></RouterProvider>
    </FirebaseAuthProvider>
  </StrictMode>,
);
