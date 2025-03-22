import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { FolderInput,FolderUp,Bolt,Cog } from 'lucide-react';

function LeftSideBar() {
  const [activeButton, setActiveButton] = useState("online");
  
  return (
    <div className='col-2 border-end me-5 ps-4 pb-4'>
      <div className="left-side-menu ">
        <div className="h-100" data-simplebar>
          

         
          <div id="sidebar">
      <div id="side">
        <h3 className="menu">Navigation</h3>

        <div>
          <Link to="/"
            className={`w-75 py-2 my-2 btn btn-outline-primary ${activeButton === "online" ? "active" : ""}`}
            onClick={() => setActiveButton("online")}
          >
            <Bolt />
            <div className="nav-link"> Online Config </div>
          </Link>
        </div>

        <div>
          <Link to="/importdata"
            className={`w-75 py-2 my-2 btn btn-outline-primary ${activeButton === "import" ? "active" : ""}`}
            onClick={() => setActiveButton("import")}
          >
            <FolderInput />
            <div className="nav-link"> Import Data </div>
          </Link>
        </div>

        <div>
          <Link to="/offlineConfig"
            className={`w-75 py-2 my-2 btn btn-outline-primary ${activeButton === "offline" ? "active" : ""}`}
            onClick={() => setActiveButton("offline")}
          >
            <Cog />
            <div className="nav-link"> Offline Config </div>
          </Link>
        </div>

        <div>
          <Link to="/ImportNavData"
            className={`w-75 py-2 my-2 btn btn-outline-primary ${activeButton === "nav" ? "active" : ""}`}
            onClick={() => setActiveButton("nav")}
          >
            <FolderUp />
            <div className="nav-link"> Import Nav Data </div>
          </Link>
        </div>
      </div>
      
      <Outlet />
    </div>

          
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
