
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/Home/Index">
          CTax
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto">
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="createNewDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create New
              </a>
              <ul className="dropdown-menu" aria-labelledby="createNewDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    New Projects
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Create Users
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Revenue Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Help &amp; Support
                  </a>
                </li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="megaMenuDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mega Menu
              </a>
              
              <div
                  className="dropdown-menu mega-menu p-4"
                  aria-labelledby="megaMenuDropdown"
                >
                  <div className="row">
                    
                    <div className="col-md-3">
                      <h5>UI Components</h5>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Widgets</a></li>
                        <li><a href="#" className="dropdown-item">Nestable List</a></li>
                        <li><a href="#" className="dropdown-item">Range Sliders</a></li>
                        <li><a href="#" className="dropdown-item">Masonry Items</a></li>
                        <li><a href="#" className="dropdown-item">Sweet Alerts</a></li>
                        <li><a href="#" className="dropdown-item">Treeview Page</a></li>
                        <li><a href="#" className="dropdown-item">Tour Page</a></li>
                      </ul>
                    </div>

                    
                    <div className="col-md-3">
                      <h5>Applications</h5>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">eCommerce Pages</a></li>
                        <li><a href="#" className="dropdown-item">CRM Pages</a></li>
                        <li><a href="#" className="dropdown-item">Email</a></li>
                        <li><a href="#" className="dropdown-item">Calendar</a></li>
                        <li><a href="#" className="dropdown-item">Team Contacts</a></li>
                        <li><a href="#" className="dropdown-item">Task Board</a></li>
                        <li><a href="#" className="dropdown-item">Email Templates</a></li>
                      </ul>
                    </div>

                    
                    <div className="col-md-3">
                      <h5>Extra Pages</h5>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Left Sidebar with User</a></li>
                        <li><a href="#" className="dropdown-item">Menu Collapsed</a></li>
                        <li><a href="#" className="dropdown-item">Small Left Sidebar</a></li>
                        <li><a href="#" className="dropdown-item">New Header Style</a></li>
                        <li><a href="#" className="dropdown-item">Search Result</a></li>
                        <li><a href="#" className="dropdown-item">Gallery Pages</a></li>
                        <li><a href="#" className="dropdown-item">Maintenance & Coming Soon</a></li>
                      </ul>
                    </div>

                    
                    <div className="col-md-3">
                      <h5>Special Discount Sale!</h5>
                      <p>Save up to 70% off.</p>
                      <button className="btn btn-primary">Download Now</button>
                    </div>
                  </div>
                </div>
            </li>
          </ul>
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src="https://via.placeholder.com/30"
                  alt="user-profile"
                  className="rounded-circle me-2"
                  width="30"
                  height="30"
                />
                Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
