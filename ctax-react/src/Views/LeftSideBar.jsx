import React from 'react';
import { Outlet, Link } from "react-router-dom";

function LeftSideBar() {
  return (
    <div className='col-2 border-end me-5 ps-4 pb-4'>
      <div className="left-side-menu ">
        <div className="h-100" data-simplebar>
          

          <div id="sidebar-menu">
            <ul id="side-menu" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <h3 className="menu-title">Navigation</h3>
              <li>
               
              <i className="mdi mdi-domain"></i>
                  <Link to="/"> Online Config </Link>
                
              </li>
              <li>
                
              <i className="mdi mdi-domain"></i>
                  <Link to="/importdata"> Import Data</Link>
                
              </li>
              
              <li>
                
                  <i className="mdi mdi-domain"></i>
                  
                  <Link to="/offlineConfig">  Offline Config</Link>
                 

                
              </li>
              <li>
                
                  <i className="mdi mdi-domain"></i>
                  <Link to="/ImportNavData">  Import Nav Data</Link>
                  

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
