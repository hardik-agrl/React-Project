import React from 'react';

function LeftSideBar() {
  return (
    <div>
      <div className="left-side-menu">
        <div className="h-100" data-simplebar>
          

          <div id="sidebar-menu">
            <ul id="side-menu">
              <li className="menu-title">Navigation</li>
              <li>
                <a href="/Home/Index">
                  <i className="mdi mdi-domain"></i>
                  <span> Online Config </span>
                </a>
              </li>
              <li id="li_sas_import_data" style={{ display: "none" }}>
                <a href="/Home/ImportData">
                  <i className="mdi mdi-domain"></i>
                  <span> Import Data </span>
                </a>
              </li>
              <li>
                <a href="/Home/NavConfig">
                  <i className="mdi mdi-domain"></i>
                  <span> Offline Config </span>
                </a>
              </li>
              <li>
                <a href="/Home/ImportNavData">
                  <i className="mdi mdi-domain"></i>
                  <span> Import Nav Data </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
