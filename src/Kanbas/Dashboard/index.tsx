import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard( 
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
  

  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      
      <div className="mb-3">
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          placeholder="Course Name"
        />
        <input
          value={course.number}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
          placeholder="Course Number"
        />
        <input
          value={course.startDate}
          className="form-control mb-2"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control mb-2"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button className="btn btn-primary me-2" onClick={addNewCourse}>Add</button>
        <button className="btn btn-secondary" onClick={updateCourse}>Update</button>
      </div>

      <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                      display: "flex",
                      flexWrap: "nowrap",
                      justifyContent: 'start',
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">
                    {course.desc ? course.desc : course.name}
                  </p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary btn-sm me-5"
                  >
                    Go{" "}
                  </Link>
                  
                  <button
                  className="btn btn-primary btn-sm ms-4"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                    className="btn btn-primary btn-sm ms-2"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
