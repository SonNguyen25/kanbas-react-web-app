import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaSitemap,
  FaComments,
  FaQuestionCircle,
  FaUser,
  FaTimes,
  FaAngleRight
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "./index.css";

const KanbasNavBarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions = [
    {
      label: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/Kanbas/Dashboard",
    },
    { label: "Account", icon: <FaUser style={{color:"gray"}}/>, path: "/Kanbas/Account" },
    { label: "Courses", icon: <FaBook />, path: "/Kanbas/Courses" },
    { label: "Calendar", icon: <FaRegCalendarAlt />, path: "/Kanbas/Calendar" },
    { label: "Inbox", icon: <FaInbox />, path: "/Kanbas/Inbox" },
    { label: "Studio", icon: <FaSitemap />, path: "/Kanbas/Studio" },
    { label: "Commons", icon: <FaComments />, path: "/Kanbas/Commons" },
    { label: "History", icon: <FaHistory />, path: "/Kanbas/History" },
    { label: "Help", icon: <FaQuestionCircle />, path: "/Kanbas/Help" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="kanbas-nav-link"
        onClick={toggleMenu}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <FaBars style={{ color: "white" }} />
      </button>

      {isOpen && (
        <div className="dropdown-menu-kanbas-navbar" >
            <div style={{width:"100%"}}>
                <FaTimes style={{ color: "lightgray", float:"right", cursor: "pointer" }} onClick={toggleMenu}/>
            </div>
            {menuOptions.map((option, index) => (
                <Link
                    key={index}
                    className="dropdown-item-kanbas-navbar"
                    to={option.path}
                    style={{fontSize: "10px"}}
                >
                    {option.icon} 
                    <span style={{marginLeft: "10px"}}>{option.label}</span>
                    <FaAngleRight style={{color: "lightgray", float:"right"}}/>
                </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default KanbasNavBarDropdown;
