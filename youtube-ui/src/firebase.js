import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFdkR_IBQegurTtadEcqam883veS-B3D0",
  authDomain: "react-4e971.firebaseapp.com",
  projectId: "react-4e971",
  storageBucket: "react-4e971.appspot.com",
  messagingSenderId: "674092948176",
  appId: "1:674092948176:web:4cbf9c3dc5dfecf5c9dcd5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
