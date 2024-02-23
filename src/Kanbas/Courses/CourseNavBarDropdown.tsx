import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaEye, FaChevronDown, FaBook, FaComments, FaVideo, FaTasks,
    FaRocket, FaGraduationCap, FaUsers, FaVideoSlash, FaPlug, FaHouseUser,
    FaBullhorn, FaFileAlt, FaFolderOpen, FaBookmark, FaBalanceScale, 
    FaHandshake, FaBookReader, FaCog } from "react-icons/fa";
import "./index.css";

function CourseNavBarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { label: "Home", icon: <FaHouseUser /> },
    { label: "Modules", icon: <FaBook /> },
    { label: "Piazza", icon: <FaPlug /> },
    { label: "Zoom Meetings", icon: <FaVideo /> },
    { label: "Assignments", icon: <FaTasks /> },
    { label: "Quizzes", icon: <FaRocket /> },
    { label: "Grades", icon: <FaGraduationCap /> },
    { label: "People", icon: <FaUsers /> },
    { label: "Panopto Video", icon: <FaVideoSlash /> },
    { label: "Discussions", icon: <FaComments /> },
    { label: "Announcements", icon: <FaBullhorn /> },
    { label: "Pages", icon: <FaFileAlt /> },
    { label: "Files", icon: <FaFolderOpen /> },
    { label: "Rubrics", icon: <FaBookmark /> },
    { label: "Outcomes", icon: <FaBalanceScale /> },
    { label: "Collaborations", icon: <FaHandshake /> },
    { label: "Syllabus", icon: <FaBookReader /> },
    { label: "Settings", icon: <FaCog /> },
  ];

  const courseId = pathname.split("/")[3];
  useEffect(() => {
    // Toggle the overflow style of the body when the dropdown is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <div className="course-nav-link" style={{float:"right"}}>
      <button style={{ background: "none", border: "none", cursor: "pointer" }}>
        <FaEye style={{ color: "white" }} />
      </button>
      <button
        style={{ background: "none", border: "none", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes style={{ color: "white" }} /> : <FaChevronDown style={{ color: "white" }} />}
      </button>

      {isOpen && (
        <div className="menu-dropdown-courses-navbar">
            {links.map((link, index) => (
                <Link className="menu-items-courses-navbar" to={`/Kanbas/Courses/${courseId}/${link.label}`} onClick={() => setIsOpen(false)}>
                  {link.icon}
                  <span style={{ marginLeft: "10px" }}>{link.label}</span>
                </Link>
            ))}
        </div>
      )}
    </div>
  );
}

export default CourseNavBarDropdown;
