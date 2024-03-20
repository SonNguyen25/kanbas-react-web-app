import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaCaretDown,
  FaCaretRight,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  //const [moduleList, setModuleList] = useState(() => db.modules.filter(module => module.course.includes(courseId ?? "")));

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  ).filter((module) => module.course.includes(courseId ?? ""));
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0] || null);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
        <div className="modules-edit d-flex flex-column">
          <div className="d-flex justify-content-between mb-2">
            <input
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
              className="form-control border rounded" // Assuming you're using Bootstrap, this will style the input
            />

            
            <button
            style={{marginLeft: "10px"}}
              onClick={() => dispatch(updateModule(module))}
              className="edit-btn-1 me-2" // Styles the button
            >
              Update
            </button>
            <button
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
              className="edit-btn-2 " // Styles the button and adds margin-right
            >
              Add
            </button>
          </div>

          <textarea 
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
            className="form-control border rounded" // Styles the textarea
          />
        </div>

        {moduleList.map((mod, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(mod)}
          >
            <div>
              <span>
                <FaEllipsisV className="me-2" />
                {selectedModule?._id === mod._id ? (
                  <FaCaretDown className="me-2" />
                ) : (
                  <FaCaretRight className="me-2" />
                )}
                {mod.name}
              </span>
              <span>
                <button
                  style={{
                    backgroundColor: "green",
                    borderRadius: "0.25rem",
                    color: "white",
                  }}
                  className="btn btn-sm me-1 rounded fs-8"
                  onClick={() => dispatch(setModule(mod))}
                >
                  Edit
                </button>

                <button
                  style={{
                    backgroundColor: "rgb(192, 36, 36)",
                    borderRadius: "0.25rem",
                  }}
                  className="btn btn-danger btn-sm me-1 rounded fs-8"
                  onClick={() => dispatch(deleteModule(mod._id))}
                >
                  Delete
                </button>
                <FaCheckCircle className="text-success" />
                <FaCaretDown />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule?._id === mod._id && (
              <ul className="list-group">
                {mod.lessons?.map(
                  (
                    lesson: {
                      name:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | null
                        | undefined;
                    },
                    index: React.Key | null | undefined
                  ) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
