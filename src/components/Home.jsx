import React from "react";
import "../components/UI/Home.css";
import logo from "../images/noSignalLogo.gif";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/signin");
  };

  return (
    <div className="home">
      <img className="logo" src={logo} alt="logo" />
      <div className="flex flex-col items-center">
        <button
          onClick={handleHome}
          className="px-4 py-1 text-lg text-white font-semibold rounded-full border hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Press Play
        </button>
      </div>
    </div>
  );
}

export default Home;
