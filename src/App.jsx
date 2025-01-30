import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for react-toastify

const App = () => {
  const navigate = useNavigate();

  // Function to check if the user is logged in or not
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" /> {/* Moved ToastContainer outside Routes */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/player/:id" element={<Player></Player>} />
      </Routes>
    </div>
  );
};

export default App;
