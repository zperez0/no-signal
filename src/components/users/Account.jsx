import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "../UI/Background.css";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="background">
        <div className="max-w-[600px] mx-auto  p-4">
          <h1 className="text-2xl font-bold py-4">Account</h1>
          <p>Username: {user && user.displayName}</p>
          <p>User Email: {user && user.email}</p>
          <button onClick={handleLogout} className="border px-6 py-2 my-4">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
