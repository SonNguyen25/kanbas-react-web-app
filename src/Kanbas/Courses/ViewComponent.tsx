import React from "react";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa"; // Import necessary icons from react-icons
import { Link } from "react-router-dom";
function ViewComponent() {
  return (
    <div>
      <div className="buttons-module">
        <button className="module-btn" data-expand="false">Collapse All</button>
        <button className="module-btn ">View Progress</button>
        <div className="dropdown">
          <button
            className="module-btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FaCheckCircle style={{ color: "green" }} />
            Publish All
          </button>
          <div
            className="dropdown-menu module-btn"
            aria-labelledby="dropdownMenuButton"
          >
            <Link className="dropdown-item" to="#">
              Publish All
            </Link>
            <Link className="dropdown-item" to="#">
              Publish All Modules and Items
            </Link>
            <Link className="dropdown-item" to="#">
              Publish Modules Only
            </Link>
            <Link className="dropdown-item" to="#">
              Unpublish All
            </Link>
          </div>
        </div>
        <button className="module-btn red-btn">+ Module</button>
        <button className="custom-btn">
          <FaEllipsisV aria-hidden="true" />
        </button>
      </div>
      <hr />
    </div>
  );
}

export default ViewComponent;
