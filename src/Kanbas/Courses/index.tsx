import { courses } from "../../Kanbas/Database";
import { useState, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  Link,
  useLocation,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaEye, FaChevronDown, FaBars } from "react-icons/fa";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import KanbasNavBarDropdown from "./KanbasNavBarDropdown";
import CourseNavBarDropdown from "./CourseNavBarDropdown";

function Courses() {
  const location = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth > 600);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      
      <div className="col-12 wd-bg-color-green d-block d-sm-none top-nav-bar">
          <h4 className="nav-bar-mini">
            <Link className="course-name-link" style={{ color: "white" }} to={`Modules`}>{course?.name}</Link>

            <Link className="course-name-link2" style={{ color: "white" }} to={location.pathname}>{decodeURIComponent(location.pathname).split("/").pop()}</Link>
            <KanbasNavBarDropdown/>
            <CourseNavBarDropdown/>
          </h4>
        </div>
      <div className="d-none d-sm-block">
      <nav className="custom-breadcrumb" aria-label="breadcrumb">
        <div className="breadcrumb d-flex course-title">
          <div className="course-nav">
            <h1 className="breadcrumb-item course-name">
              <HiMiniBars3 />
              <Link className="course-name-link" to={`Modules`}>
                {course?.name}{" "}
              </Link>
            </h1>
            <p className="breadcrumb-item page-title" aria-current="page">
              <Link to={location.pathname} style={{ color: "black" }}> {decodeURIComponent(location.pathname).split("/").pop()} </Link>
            </p>
          </div>
          <button className="d-none d-lg-inline-block float-end custom-btn">
          <FaEye className="icon"/>
            Student View
          </button>
        </div>
      </nav>
      </div>
      <div className="seperator d-none d-sm-block">
        <hr />
      </div>
      <div className="course-name-small d-none d-sm-block">202410_1 Fall 2023 Semest...</div>
      <div className="d-none d-sm-block">
        
      <CourseNavigation />
      
      </div>
      <div className="d-flex">
        
        <div
          className={"scroll-content overflow-y-scroll bottom-0 end-0" + (isLargeScreen ? " position-fixed" : " position-static")}
          style={{ left: "320px", top: "90px"}}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1 className="header">Piazza</h1>} />
            <Route
              path="Zoom Meetings"
              element={<h1 className="header">Zoom Meetings</h1>}
            />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1 className="header">Assignment Editor</h1>}
            />
            <Route
              path="Quizzes"
              element={<h1 className="header">Quizzes</h1>}
            />
            <Route path="Grades" element={<h1 className="header">Grades</h1>} />
            <Route path="People" element={<h1 className="header">People</h1>} />
            <Route
              path="Panopto Video"
              element={<h1 className="header">Panopto Video</h1>}
            />
            <Route
              path="Discussions"
              element={<h1 className="header">Discussions</h1>}
            />
            <Route
              path="Announcements"
              element={<h1 className="header">Announcements</h1>}
            />
            <Route path="Pages" element={<h1 className="header">Pages</h1>} />
            <Route path="Files" element={<h1 className="header">Files</h1>} />
            <Route
              path="Rubrics"
              element={<h1 className="header">Rubrics</h1>}
            />
            <Route
              path="Outcomes"
              element={<h1 className="header">Outcomes</h1>}
            />
            <Route
              path="Collaborations"
              element={<h1 className="header">Collaborations</h1>}
            />
            <Route
              path="Syllabus"
              element={<h1 className="header">Syllabus</h1>}
            />
            <Route
              path="Settings"
              element={<h1 className="header">Settings</h1>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
