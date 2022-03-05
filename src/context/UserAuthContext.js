import React from 'react';
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  // Send reset password email
  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }
  // Verify Password Reset oobCode
  function verifyActionCode(actionCode) {
    return verifyPasswordResetCode(auth, actionCode)
  }
  // Reset user password
  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });
    return unsubscribe;
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, forgotPassword, verifyActionCode, resetPassword }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}