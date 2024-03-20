import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./index.css";
import {
  FaRegUserCircle,
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaSitemap,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";

function KanbasNavigation({ coursesHeight }: { coursesHeight: number }) {
  const isAccountActive = useLocation().pathname.includes("Account");
  const [placeholderCount, setPlaceholderCount] = useState(0);
  useEffect(() => {

    const placeholdersToAdd = Math.floor(coursesHeight * 3 + 4);

    setPlaceholderCount(Math.max(placeholdersToAdd, 0));
  }, [coursesHeight]); // Recalculate when coursesHeight change

  const links = [
    {
      label: "Account",
      icon: (
        <FaRegUserCircle
          className={`fs-2  ${isAccountActive ? "icon-active" : ""}`}
        />
      ),
      path: "/Kanbas/Account",
    },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" />, path: "#" },
    { label: "History", icon: <FaHistory className="fs-2" />, path: "#" },
    { label: "Studio", icon: <FaSitemap className="fs-2" />, path: "#" },
    { label: "Commons", icon: <FaComments className="fs-2" />, path: "#" },
    { label: "Help", icon: <FaQuestionCircle className="fs-2" />, path: "#" },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <a href="http://northeastern.edu">
          <img
            className="neu-logo"
            src="/images/logo1.png"
            alt="Northeastern Logo"
          />
        </a>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link
            style={{ whiteSpace: "nowrap"}}
            to={`/Kanbas/${link.label}`}
          >
            <div>{link.icon}</div> {/* Icon on its own line */}
            <div>{link.label}</div> {/* Label on its own line */}
          </Link>
        </li>
      ))}
      {Array.from({ length: placeholderCount }, (_, index) => (
        <li></li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
