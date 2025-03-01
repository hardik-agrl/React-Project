import React from 'react';
import { Outlet, Link } from "react-router-dom";

function LeftSideBar() {
  return (
    <div className='col-2 border-end me-5 ps-4 pb-4'>
      <div className="left-side-menu ">
        <div className="h-100" data-simplebar>
          

          <div id="sidebar-menu">
            <ul id="side-menu">
              <h3 className="menu-title">Navigation</h3>
              <li>
                {/* <a href="/Home/Index"> */}
                  <i className="mdi mdi-domain"></i>
                  <Link to="/"> Online Config </Link>
                  {/* <span> Online Config </span> */}
                {/* </a> */}
              </li>
              <li>
                {/* <a href="/Home/importdata"> */}
                  <i className="mdi mdi-domain"></i>
                  <Link to="/importdata"> Import Data</Link>
                  {/* <span> Import Data </span> */}
                {/* </a> */}
              </li>
              {/* <li id="li_sas_import_data" style={{ display: "none" }}>
                <a href="/Home/ImportData">
                  <i className="mdi mdi-domain"></i>
                  
                  <span> Import Data </span>
                </a>
              </li> */}
              <li>
                <a href="/Home/NavConfig">
                  <i className="mdi mdi-domain"></i>
                  <Link to="/offlineConfig">  Offline Config</Link>
                  {/* <span> Offline Config </span> */}

                </a>
              </li>
              <li>
                <a href="/Home/ImportNavData">
                  <i className="mdi mdi-domain"></i>
                  <Link to="/ImportNavData">  Import Nav Data</Link>
                  {/* <span> Import Nav Data </span> */}

                </a>
              </li>
            </ul>
            <Outlet />

          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
