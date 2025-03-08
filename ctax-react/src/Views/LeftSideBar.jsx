import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { FolderInput,FolderUp,Bolt,Cog } from 'lucide-react';

function LeftSideBar() {
  const [activeButton, setActiveButton] = useState("online");
  
  return (
    <div className='col-2 border-end me-5 ps-4 pb-4'>
      <div className="left-side-menu ">
        <div className="h-100" data-simplebar>
          

          {/* <div id="sidebar">
            <div id="side" >
              <h3 className="menu">Navigation</h3>


              <div>
               <button id='online' className='w-75 py-2 my-2 btn btn-outline-primary ' >
                <Bolt/>
                  <Link to="/" style={{textDecoration:'none' ,color:'inherit'}}> Online Config </Link></button>
                
              </div>
              <div>
              <button id='import' className='w-75 py-2 my-2 btn btn-outline-primary'>
                  <FolderInput/>
                  <Link to="/importdata" style={{textDecoration:'none' ,color:'inherit'}}> Import Data</Link></button>
                
              </div>
              
              <div>
                
                  <button  id='offline' className='w-75 py-2 my-2 btn btn-outline-primary '>
                  <Cog/>
                 <Link to="/offlineConfig" style={{textDecoration:'none' ,color:'inherit'}}>  Offline Config</Link></button>
                 

                
              </div>
              <div>
                <button id='nav' className='w-75 py-2 my-2 btn btn-outline-primary'>
                <FolderUp/>  
              <Link to="/ImportNavData" style={{textDecoration:'none' ,color:'inherit'}}>  Import Nav Data</Link></button>
                  

              </div>
            </div>
            <Outlet />

          </div> */}

          <div id="sidebar">
      <div id="side">
        <h3 className="menu">Navigation</h3>

        <div>
          <button
            className={`w-75 py-2 my-2 btn btn-outline-primary ${activeButton === "online" ? "active" : ""}`}
            onClick={() => setActiveButton("online")}
          >
            <Bolt />
            <Link to="/" className="nav-link"> Online Config </Link>
          </button>
        </div>

        <div>
          <button
            className={`w-75 py-2 my-2 btn btn-outline-primary ${activeButton === "import" ? "active" : ""}`}
            onClick={() => setActiveButton("import")}
          >
            <FolderInput />
            <Link to="/importdata" className="nav-link"> Import Data </Link>
          </button>
        </div>

        <div>
          <button
            className={`w-75 py-2 my-2 btn btn-outline-primary ${activeButton === "offline" ? "active" : ""}`}
            onClick={() => setActiveButton("offline")}
          >
            <Cog />
            <Link to="/offlineConfig" className="nav-link"> Offline Config </Link>
          </button>
        </div>

        <div>
          <button
            className={`w-75 py-2 my-2 btn btn-outline-primary ${activeButton === "nav" ? "active" : ""}`}
            onClick={() => setActiveButton("nav")}
          >
            <FolderUp />
            <Link to="/ImportNavData" className="nav-link"> Import Nav Data </Link>
          </button>
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
