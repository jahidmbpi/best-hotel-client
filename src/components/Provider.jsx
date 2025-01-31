/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { Auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Create and export AuthContext outside the Provider component
export const AuthContext = createContext();

const Provider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(false);
  console.log(user);

  // register user

  const RegisterUsser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  //  log in user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  // log out
  const logOut = () => {
    return signOut(Auth);
  };
  // singh in with google
  const googlelOgin = () => {
    return signInWithPopup(Auth, provider);
  };
  // on AuthState change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    RegisterUsser,
    loginUser,
    setUser,
    googlelOgin,
    logOut,
    setLoader,
    loader,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
