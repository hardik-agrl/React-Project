import React,{useState,useEffect} from 'react'
import feather from "feather-icons";
import { MdSearch } from "react-icons/md";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';





function NavBar(){
    // useEffect(() => {
    // feather.replace();
    // }, []);
    
    return(
        <>
        
        <div className="navbar-custom d-flex flex-row">
            <div className="container-fluid">
                
                    <li className="d-none d-lg-block">
                        <form className="app-search">
                            <div className="app-search-box dropdown">
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Search..." id="top-search"/>
                                    <MdSearch />
                                    <div className="input-group-append">
                                        <button className="btn" type="submit">
                                            <i className="fe-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                                    <div className="dropdown-header noti-title">
                                        <h5 className="text-overflow mb-2">Found 22 results</h5>
                                    </div>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="fe-home mr-1"></i>
                                        <span>Analytics Report</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="fe-aperture mr-1"></i>
                                        <span>How can I help you?</span>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="fe-settings mr-1"></i>
                                        <span>User profile settings</span>
                                    </a>

                                    <div className="dropdown-header noti-title">
                                        <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                    </div>

                                    <div className="notification-list">
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="media">
                                                <img className="d-flex mr-2 rounded-circle" src="../assets/images/users/user-2.jpg" alt="Generic placeholder image" height="32"/>
                                                <div className="media-body">
                                                    <h5 className="m-0 font-14">Erwin E. Brown</h5>
                                                    <span className="font-12 mb-0">UI Designer</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="media">
                                                <img className="d-flex mr-2 rounded-circle" src="/assets/images/users/user-5.jpg" alt="Generic placeholder image" height="32"/>
                                                <div className="media-body">
                                                    <h5 className="m-0 font-14">Jacob Deo</h5>
                                                    <span className="font-12 mb-0">Developer</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </li>

                    <li className="dropdown d-inline-block d-lg-none">
                        <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="fe-search noti-icon"></i>
                        </a>
                        <div className="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                            <form className="p-3">
                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                            </form>
                        </div>
                    </li>

                    <li className="dropdown d-none d-lg-inline-block">
                        <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="fullscreen" href="#">
                            <i className="fe-maximize noti-icon"></i>
                        </a>
                    </li>

                

                    <li className="dropdown notification-list topbar-dropdown">
                        <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="fe-bell noti-icon"></i>
                            <span className="badge badge-danger rounded-circle noti-icon-badge">9</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg">

                            <div className="dropdown-item noti-title">
                                <h5 className="m-0">
                                    <span className="float-right">
                                        <a href="" className="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Notification
                                </h5>
                            </div>

                            <div className="noti-scroll" data-simplebar>

                                <a href="javascript:void(0);" className="dropdown-item notify-item active">
                                    <div className="notify-icon">
                                        <img src="../assets/images/users/user-1.jpg" className="img-fluid rounded-circle" alt="" />
                                    </div>
                                    <p className="notify-details">Cristina Pride</p>
                                    <p className="text-muted mb-0 user-msg">
                                        <small>Hi, How are you? What about our next meeting</small>
                                    </p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-primary">
                                        <i className="mdi mdi-comment-account-outline"></i>
                                    </div>
                                    <p className="notify-details">
                                        Caleb Flakelar commented on Admin
                                        <small className="text-muted">1 min ago</small>
                                    </p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon">
                                        <img src="../assets/images/users/user-4.jpg" className="img-fluid rounded-circle" alt="" />
                                    </div>
                                    <p className="notify-details">Karen Robinson</p>
                                    <p className="text-muted mb-0 user-msg">
                                        <small>Wow ! this admin looks good and awesome design</small>
                                    </p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-warning">
                                        <i className="mdi mdi-account-plus"></i>
                                    </div>
                                    <p className="notify-details">
                                        New user registered.
                                        <small className="text-muted">5 hours ago</small>
                                    </p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info">
                                        <i className="mdi mdi-comment-account-outline"></i>
                                    </div>
                                    <p className="notify-details">
                                        Caleb Flakelar commented on Admin
                                        <small className="text-muted">4 days ago</small>
                                    </p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-secondary">
                                        <i className="mdi mdi-heart"></i>
                                    </div>
                                    <p className="notify-details">
                                        Carlos Crouch liked
                                        <b>Admin</b>
                                        <small className="text-muted">13 days ago</small>
                                    </p>
                                </a>
                            </div>

                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                View all
                                <i className="fe-arrow-right"></i>
                            </a>

                        </div>
                    </li>

                    <li className="dropdown notification-list topbar-dropdown">
                        <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="#" alt="user-image" className="rounded-circle"/>
                            <span className="pro-user-name ml-1">
                                <span>Demo</span> <i className="mdi mdi-chevron-down"></i>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-user"></i>
                                <span>My Account</span>
                            </a>

                            <div className="dropdown-divider"></div>

                            {/* <a href="@Url.Content("/Home/Logout")" className="dropdown-item notify-item">
                                <i className="fe-log-out"></i>
                                <span>Logout</span>
                            </a> */}

                        </div>
                    </li>

                    

                

                <div className="logo-box">
                    <a href="/Home/Index" className="logo logo-dark text-center">
                        <span className="logo-sm">
                            <img src="../assets/images/logo-sm.png" alt="" height="22"/>
                        </span>
                        <span className="logo-lg">
                            <img src="../assets/images/logo-dark.png" alt="" height="20"/>
                        </span>
                    </a>

                    <a href="/Home/Index" className="logo logo-light text-center">
                        
                        <span className="logo-sm text-white"><b>CTax</b></span>
                        <span className="logo-lg text-white"><b>CTax</b></span>
                    </a>
                </div>

                <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li>
                        <button className="button-menu-mobile waves-effect waves-light">
                            <i className="fe-menu"></i>
                        </button>
                    </li>

                    <li>


                        {/* <!-- Mobile menu toggle (Horizontal Layout)--> */}

                        <a className="navbar-toggle nav-link" data-toggle="collapse" data-target="#topnav-menu-content">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        {/* <!-- End mobile menu toggle--> */}
                    </li>

                    <li className="dropdown d-none d-xl-block">
                        <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            Create New
                            <i className="mdi mdi-chevron-down"></i>
                        </a>
                        <div className="dropdown-menu">
                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="fe-briefcase mr-1"></i>
                                <span>New Projects</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="fe-user mr-1"></i>
                                <span>Create Users</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="fe-bar-chart-line- mr-1"></i>
                                <span>Revenue Report</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="fe-settings mr-1"></i>
                                <span>Settings</span>
                            </a>

                            <div className="dropdown-divider"></div>

                            <a href="javascript:void(0);" className="dropdown-item">
                                <i className="fe-headphones mr-1"></i>
                                <span>Help & Support</span>
                            </a>

                        </div>
                    </li>

                    <li className="dropdown dropdown-mega d-none d-xl-block">
                        <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            Mega Menu
                            <i className="mdi mdi-chevron-down"></i>
                        </a>
                        <div className="dropdown-menu dropdown-megamenu">
                            <div className="row">
                                <div className="col-sm-8">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h5 className="text-dark mt-0">UI Components</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);">Widgets</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Nestable List</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Range Sliders</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Masonry Items</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Sweet Alerts</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Treeview Page</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Tour Page</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <h5 className="text-dark mt-0">Applications</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);">eCommerce Pages</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">CRM Pages</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Email</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Calendar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Team Contacts</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Task Board</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Email Templates</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-4">
                                            <h5 className="text-dark mt-0">Extra Pages</h5>
                                            <ul className="list-unstyled megamenu-list">
                                                <li>
                                                    <a href="javascript:void(0);">Left Sidebar with User</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Menu Collapsed</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Small Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">New Header Style</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Search Result</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Gallery Pages</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">Maintenance & Coming Soon</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="text-center mt-3">
                                        <h3 className="text-dark">Special Discount Sale!</h3>
                                        <h4>Save up to 70% off.</h4>
                                        <button className="btn btn-primary btn-rounded mt-3">Download Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                </ul>
                <div className="clearfix">
                <div className="user-box text-center">
            <img
              src="../assets/images/users/user-1.jpg"
              alt="user-img"
              title="Mat Helme"
              className="rounded-circle avatar-md"
            />
            <div className="dropdown">
              <a
                href="javascript: void(0);"
                className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                data-toggle="dropdown"
              >
                Geneva Kennedy
              </a>
              <div className="dropdown-menu user-pro-dropdown">
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <i className="fe-user mr-1"></i>
                  <span>My Account</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <i className="fe-settings mr-1"></i>
                  <span>Settings</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <i className="fe-lock mr-1"></i>
                  <span>Lock Screen</span>
                </a>
                <a href="javascript:void(0);" className="dropdown-item notify-item">
                  <i className="fe-log-out mr-1"></i>
                  <span>Logout</span>
                </a>
              </div>
            </div>
            <p className="text-muted">Admin Head</p>
          </div>
                </div>
            </div>
        </div>

        </>
    )
    
}



export default NavBar;