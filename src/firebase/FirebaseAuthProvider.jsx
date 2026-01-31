import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
  // setUser
  const [user, setUser] = useState(null);
  // setLoading
  const [loading, setLoading] = useState(true);
  // creatUser
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIsUser
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  // Observe User

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      setLoading(false);

      console.log(crueentUser);
    });
    return () => unSuscribe();
  }, []);

  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
