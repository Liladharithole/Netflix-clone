import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA4-dM8-LQDEVzUTIhrzx79o4D6oQcKOiA",
  authDomain: "netflix-clone-liladhar.firebaseapp.com",
  projectId: "netflix-clone-liladhar",
  storageBucket: "netflix-clone-liladhar.firebasestorage.app",
  messagingSenderId: "923417853182",
  appId: "1:923417853182:web:19148a7dfad888a10579af",
  measurementId: "G-V3TH4S4N2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success("Signup successful!");
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      toast.error("Email already in use.");
    } else {
      toast.error(error.message); // Display the real error message
    }
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res.user);
    toast.success("Login successful!");
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
      toast.error("Invalid credentials.");
    } else {
      toast.error(error.message); // Display the real error message
    }
  }
};

const logout = () => {
  auth.signOut();
};

export { auth, db, signup, login, logout };
