import { Link, useLocation } from "react-router-dom";
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

function KanbasNavigation() {
  const isAccountActive = useLocation().pathname.includes("Account");
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
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.icon} {link.label}{" "}
          </Link>
        </li>
      ))}
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}
export default KanbasNavigation;
