import ModuleList from "../Modules/List";
import ViewComponent from "../ViewComponent";
import Status from "./Status";
import "./index.css";

function Home() {
  return (
    <div>
      <h2 className="header"> </h2>
      <div className="content-container">
        <div className="left-content">
          <ViewComponent />
          <ModuleList />
        </div>
          <Status />
      </div>
    </div>
  );
}
export default Home;
