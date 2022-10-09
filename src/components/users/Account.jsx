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
        <div className=" container py-10">
          <div class="block p-24 rounded-lg shadow-lg bg-white opacity-75 max-w-sm py-2">
            <div className="max-w-[600px] mx-auto  p-4">
              <h1 className="text-2xl font-bold py-4">Account</h1>
              <p>{user && user.displayName}</p>
              <p className="pb-4">{user && user.email}</p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-black-600 font-semibold rounded-full border hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
