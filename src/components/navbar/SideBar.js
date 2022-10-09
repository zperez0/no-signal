import React from "react";
import { FaCompass, FaUserCircle } from "react-icons/fa";
import { IoMapOutline } from "react-icons/io5";
import { GiBackpack } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../context/AuthContext";

const SideBar = ({ text }) => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  if (user.uid) {
    const handleTrails = () => {
      navigate("/parks");
    };

    const handleMap = () => {
      navigate("/map");
    };

    const handleNotes = () => {
      navigate("/notes");
    };

    const handleWeather = () => {
      navigate("/weather");
    };

    const handleAccount = () => {
      navigate("/account");
    };

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
      <div
        className="fixed top-0 left-0 h-screen w-20 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
      >
        <button onClick={handleTrails}>
          <SideBarIcon icon={<FaCompass size="24" />} />
        </button>

        <button onClick={handleMap}>
          <SideBarIcon icon={<IoMapOutline size="29" />} />
        </button>

        <button onClick={handleNotes}>
          <SideBarIcon icon={<GiBackpack size="33" />} />
        </button>

        <button onClick={handleWeather}>
          <SideBarIcon icon={<WiDayCloudy size="33" />} />
        </button>

        <button onClick={handleAccount}>
          <SideBarIcon icon={<FaUserCircle size="24" />} />
        </button>

        <button onClick={handleLogout}>
          <SideBarIcon icon={<RiLogoutCircleRLine size="24" />} />
        </button>

      </div>
    );
  }
};
const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    {/* <span className="sidebar-tooltip group-hover:scale-100">{text}</span> */}
  </div>
);

export default SideBar;
