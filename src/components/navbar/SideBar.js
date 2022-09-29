import React from 'react'
import { BsGearFill } from 'react-icons/bs';
import { FaCompass } from 'react-icons/fa';
import { IoMapOutline } from "react-icons/io5";
import { GiBackpack } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


const SideBar = ({ text }) => {
  const navigate = useNavigate();

  const handleTrails = () => {
    navigate("/trails");
  }

  const handleMap = () => {
    navigate("/map");
  }

  const handleNotes = () => {
    navigate("/notes");
  }

  const handleAccount = () => {
    navigate("/account");
  }

  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                <button onClick={handleTrails}>   
        <SideBarIcon icon={<FaCompass size="24" />} />
        </button> 
        
        <button onClick={handleMap}>   
        <SideBarIcon icon={<IoMapOutline size="29" />} />
        </button>

        <button onClick={handleNotes}>
        <SideBarIcon icon={<GiBackpack size="33" />} />
        </button>

        <button onClick={handleAccount}>
        <SideBarIcon icon={<BsGearFill size="22" />} />
        </button>
    </div>
  );
};
const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
    {text}
    </span>
  </div>
);

export default SideBar