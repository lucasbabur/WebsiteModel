import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseAppConfig";

const provider = new GoogleAuthProvider();

export const signIn = () => {
  signInWithPopup(auth, provider);
};

export const signOut = () => {
  auth.signOut();
};
