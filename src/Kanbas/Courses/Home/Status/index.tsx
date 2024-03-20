import React from "react";
import { Link } from 'react-router-dom';
import {
    FaBan,
    FaCheckCircle,
    FaDownload,
    FaComments,
    FaBullseye,
    FaChartBar, 
    FaBullhorn,
    FaBell,
    FaCalendar,
} from "react-icons/fa";
import db from '../../../Database';

function Status() {

  const comingUpItems = [...db.todo];
  const buttons = [
    { icon: <FaDownload />, text: "Import Existing Content" },
    { icon: <FaComments />, text: "Import From Commons" },
    { icon: <FaBullseye />, text: "Choose Home Page" },
    { icon: <FaChartBar />, text: "View Course Stream" },
    { icon: <FaBullhorn />, text: "New Announcement" },
    { icon: <FaChartBar />, text: "New Analytics" },
    { icon: <FaBell />, text: "View Course Notifications" },
  ];

  const renderButtons = () =>
    buttons.map((button, index) => (
      <React.Fragment key={index}>
        <button className="right-grey-buttons d-none d-lg-inline-block">
          {button.icon} {button.text}
        </button>
        <br />
      </React.Fragment>
    ));

  return (
    <div className="col-lg-3 col-xl-2 d-none d-lg-block d-sm-none wd-bg-color-green course-status">
    <h4>Course Status</h4>
      <table>
        <tbody>
          <tr>
            <td className="course-status-td">
              <button className="d-none d-lg-inline-block float-end custom1-btn">
                <FaBan /> Unpublish
              </button>
              <button className="blurry-button d-none d-lg-inline-block float-end">
                <FaCheckCircle /> Published
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      {renderButtons()}
      <br />
      <h4>
        <b>To Do</b>
      </h4>
      <hr />
      <ul>
        {db.todo.map((item) => (
          <li key={item.id}>
            <Link to={'#'} style={{ color: 'red' }}>
              {item.action} {item.date} at {item.time}
            </Link>
          </li>
        ))}
      </ul>

      <h4>
        <b>Coming Up</b>
      </h4>
      <hr />
      <FaCalendar />
      <Link to={"#"} style={{ color: 'red' }}>View Calendar</Link>
      <ul>
        {comingUpItems.map((item) => (
          <li key={item.id}>
            <FaCalendar />
            <Link to={'#'} style={{ color: 'red' }}>
              {item.action} {item.date} at {item.time}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Status;
