import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaCaretDown, } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course.includes(courseId ?? "")
  );
  return (
    <>
      {/* {<!-- Add buttons and other fields here -->} */}
      <div>
        <div className="header ">
          <div
            className="assignments-text-field-container d-flex"
            style={{ width: "100%" }}
          >
            <input
              type="text"
              id="text-fields-search-assignments"
              className="assignments-form-control form-control"
              placeholder="Search for Assignments"
              style={{ width: "80%" }}
            />
          </div>

          <button type="button" className="assignments-btn btn btn-secondary">
            + Group
          </button>
          <button
            type="button"
            className="assignments-btn btn btn-secondary assignments-red-btn"
          >
            + Assignment
          </button>
          <button
            type="button"
            className="assignments-btn btn btn-secondary assignments-custom-btn"
          >
            <FaEllipsisV />
          </button>
        </div>
        <hr />
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <span>
              <FaEllipsisV className="me-2" /> <FaCaretDown className="me-2" /> ASSIGNMENTS </span>
              <span className="float-end">
              <span className="percentage-circle me-2">40% of Total</span>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
            


            {assignmentList.map((assignment) => (
                <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <FontAwesomeIcon icon={faPenToSquare} style={{color: "green"}}/>&nbsp; 
                    <Link
                    className="no-decoration"
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        style={{color:"black"}}
                    >
                         {assignment.title}
                    </Link>
                    <br/>
                    <span className="float-start">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link to="#" className="no-decoration" style={{fontSize: "10px", color:"red"}}>
                           Multiple Modules
                        </Link> <span style={{ fontSize: "10px" }}> | {assignment.status} </span>
                        </span>
                    <span className="float-end flex-center">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                    </span>
                </li>
            ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Assignments;
